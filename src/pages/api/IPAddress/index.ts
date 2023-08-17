import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const page: number = Number(req.query.page) || 1;
      const pageSize: number = Number(req.query.pageSize) || 10;

      const iPAddresses = await prisma.iPAddress.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
      });

      const totalIPAddresses = await prisma.iPAddress.count();
      const totalPage: number = Math.ceil(totalIPAddresses / pageSize);

      res.status(200).json({ iPAddresses, totalPage });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the IP Addresses' });
    }
  } else if (req.method === 'POST') {
    const { userIP, totalIPs } = req.body; // รับข้อมูลจาก request body

    try {
      const newIPAddress = await prisma.iPAddress.create({
        data: {
          ipAddress: userIP,
          count: totalIPs,
        },
      });

      res.status(201).json(newIPAddress);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the IP Address' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
