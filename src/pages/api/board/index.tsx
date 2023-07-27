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

                const board = await prisma.board.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalboard = await prisma.board.count();
                const totalPage: number = Math.ceil(totalboard / pageSize);
                res.status(200).json({ board });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the board" });
            }
            break;

        case 'POST':
            try {
                const newboard = await prisma.board.create({
                    data: req.body,
                });

                res.status(201).json(newboard);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the board" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}