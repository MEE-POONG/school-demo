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

                const advisor = await prisma.advisor.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totaladvisor = await prisma.advisor.count();
                const totalPage: number = Math.ceil(totaladvisor / pageSize);
                res.status(200).json({ advisor });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the advisor" });
            }
            break;

        case 'POST':
            try {
                const newadvisor = await prisma.advisor.create({
                    data: req.body,
                });

                res.status(201).json(newadvisor);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the advisor" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}