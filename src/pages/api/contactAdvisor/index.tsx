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

                const contactAdvisor = await prisma.contactAdvisor.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalcontactAdvisor = await prisma.contactAdvisor.count();
                const totalPage: number = Math.ceil(totalcontactAdvisor / pageSize);
                res.status(200).json({ contactAdvisor });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the contactAdvisor" });
            }
            break;

        case 'POST':
            try {
                const newcontactAdvisor = await prisma.contactAdvisor.create({
                    data: req.body,
                });

                res.status(201).json(newcontactAdvisor);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the contactAdvisor" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}