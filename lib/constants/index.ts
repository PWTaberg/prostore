export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce store built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

/*
model Product {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  name        String
  slug        String   @unique(map: "product_slug_idx")
  category    String
  images      String[]
  brand       String
  description String
  stock       Int
  price       Decimal  @default(0) @db.Decimal(12, 2)
  rating      Decimal  @default(0) @db.Decimal(3, 2)
  numReviews  Int      @default(0)
  isFeatured  Boolean  @default(false)
  banner      String?
  createdAt   DateTime @default(now()) @db.Timestamp(6)
}


generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
  //output   = "../lib/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
  */
