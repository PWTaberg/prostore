import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  // first remove existing products from db
  await prisma.product.deleteMany();

  // add products to db
  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully");
}

main();
