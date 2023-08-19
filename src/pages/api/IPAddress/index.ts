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

                const iPAddress = await prisma.iPAddress.findMany({
                    // skip: (page - 1) * pageSize,
                    // take: pageSize,
                });

                const totaliPAddress = await prisma.iPAddress.count();
                const totalPage: number = Math.ceil(totaliPAddress / pageSize);
                res.status(200).json({ iPAddress });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the iPAddress" });
            }
            break;

        case 'POST':
            try {
                const newiPAddress = await prisma.iPAddress.create({
                    data: req.body,
                });

                res.status(201).json(newiPAddress);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the iPAddress" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}