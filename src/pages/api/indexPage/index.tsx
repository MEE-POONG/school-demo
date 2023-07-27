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

                const indexPage = await prisma.indexPage.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalindexPage = await prisma.indexPage.count();
                const totalPage: number = Math.ceil(totalindexPage / pageSize);
                res.status(200).json({ indexPage });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the indexPage" });
            }
            break;

        case 'POST':
            try {
                const newindexPage = await prisma.indexPage.create({
                    data: req.body,
                });

                res.status(201).json(newindexPage);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the indexPage" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}