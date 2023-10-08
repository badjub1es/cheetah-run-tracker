import { prisma } from 'server/db/client';
import { hashPassword } from './create';
import { NextApiRequest, NextApiResponse } from 'next';
import { RequestMethod } from '@customTypes/request/RequestMethod';

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
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true,
                image: true
            }
        });

        if (user && user.password === hashPassword(password)) {
            delete user["password"];
            return res.status(200).json(user);
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        // handle error gracefully
    }
};
