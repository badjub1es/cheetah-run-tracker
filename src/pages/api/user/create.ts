import isEmail from 'validator/lib/isEmail';
import { SHA256 } from 'crypto-js';
import { prisma } from 'server/db/client';
import { RequestMethod } from '@customTypes/request/RequestMethod';
import { validateStrongPassword } from 'utils/validateStrongPassword';
import { NextApiRequest, NextApiResponse } from 'next';

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

    // If errors, return 400 response
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const user = await prisma.user.create({
            data: { ...req.body, password: hashPassword(password) }
        });
        return res.status(201).json({ user });
    } catch (error) {
        // handle user creation errors gracefully
    }
};
