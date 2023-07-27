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

                const contactSchool = await prisma.contactSchool.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalcontactSchool = await prisma.contactSchool.count();
                const totalPage: number = Math.ceil(totalcontactSchool / pageSize);
                res.status(200).json({ contactSchool });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the contactSchool" });
            }
            break;

        case 'POST':
            try {
                const newcontactSchool = await prisma.contactSchool.create({
                    data: req.body,
                });

                res.status(201).json(newcontactSchool);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the contactSchool" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}