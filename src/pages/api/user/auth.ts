import { hashPassword } from "./create";
import { NextApiRequest, NextApiResponse } from "next";
import { RequestMethod } from "@customTypes/request/RequestMethod";
import { db } from "db";
import { users } from "db/schema/schema";
import { eq } from "drizzle-orm";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === RequestMethod.POST) {
    await loginUserHandler(req, res);
  } else {
    return res.status(405);
  }
};

const loginUserHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  if (email == null || password == null) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    const userTyped:
      | {
          id: string;
          name: string | null;
          email: string;
          emailVerified: Date | null;
          password: string | null;
          image: string | null;
        }[]
      | null = user;

    if (userTyped[0] && userTyped[0].password === hashPassword(password)) {
      userTyped[0].password = null;
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error, "ERRO!");
    // handle error gracefully
  }
};
