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

                const welfare = await prisma.welfare.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalwelfare = await prisma.welfare.count();
                const totalPage: number = Math.ceil(totalwelfare / pageSize);
                res.status(200).json({ welfare });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the welfare" });
            }
            break;

        case 'POST':
            try {
                const newwelfare = await prisma.welfare.create({
                    data: req.body,
                });

                res.status(201).json(newwelfare);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the welfare" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}