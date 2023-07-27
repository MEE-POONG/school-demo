import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const major = await prisma.major.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    include: {
                        faculty : true,
                    },
                    
                });

                const totalmajor = await prisma.major.count();
                const totalPage: number = Math.ceil(totalmajor / pageSize);
                res.status(200).json({ major });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the major" });
            }
            break;

        case 'POST':
            try {
                const newmajor = await prisma.major.create({
                    data: req.body,
                });

                res.status(201).json(newmajor);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the major" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}