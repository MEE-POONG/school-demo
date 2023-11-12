import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    // ... other methods ...

    case "GET":
      await handleDeleteAll(req, res);
      break;

    // ... default case ...
  }
}

// ... other handlers ...

async function handleDeleteAll(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch the first 100 IPAddresses
    const ipAddresses = await prisma.iPAddress.findMany({
      take: 100,
      select: { id: true } // Select only the id field
    });

    // Extract the ids
    const idsToDelete = ipAddresses.map(ip => ip.id);

    // Delete the fetched IPAddresses
    await prisma.iPAddress.deleteMany({
      where: { id: { in: idsToDelete } }
    });

    res.status(200).json({ message: `Successfully deleted ${idsToDelete.length} IP addresses` });
  } catch (error) {
    res.status(500).json({ message: "Error deleting IP addresses" });
  }
}