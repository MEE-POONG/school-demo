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

                const aboutPanom = await prisma.aboutPanom.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalaboutPanom = await prisma.aboutPanom.count();
                const totalPage: number = Math.ceil(totalaboutPanom / pageSize);
                res.status(200).json({ aboutPanom });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the aboutPanom" });
            }
            break;

        case 'POST':
            try {
                const newaboutPanom = await prisma.aboutPanom.create({
                    data: req.body,
                });

                res.status(201).json(newaboutPanom);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the aboutPanom" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}