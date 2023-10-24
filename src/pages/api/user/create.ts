import isEmail from "validator/lib/isEmail";
import { SHA256 } from "crypto-js";
import { prisma } from "server/db/client";
import { RequestMethod } from "@customTypes/request/RequestMethod";
import { validateStrongPassword } from "utils/validateStrongPassword";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "db";
import { users } from "db/schema/schema";
import { eq } from "drizzle-orm";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === RequestMethod.POST) {
    await createUserHandler(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export const hashPassword = (password: string) => {
  return SHA256(password).toString();
};

const createUserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const errors = [];
  const { email, password } = req.body;

  // validate email address
  if (!isEmail(email)) {
    errors.push("Valid email");
  }

  // validate strong password
  if (!validateStrongPassword(password)) {
    errors.push("Strong password required");
  }

  // // If errors, return 400 response
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const user = await db.select().from(users).where(eq(users.email, email));

  if (user[0] != null) {
    return res.status(409).json({
      body: "User with that email already exists",
    });
  }

  try {
    const user = await db
      .insert(users)
      .values({ ...req.body, password: hashPassword(password) });
    return res.status(201).json({ user });
  } catch (error) {
    return error;
  }
};
