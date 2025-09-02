import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Creates a new connection pool.
// const pool = new Pool({ connectionString });

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.

// Create a Neon connection pool
const pool = new Pool({ connectionString });

//  Instantiate Prisma adapter with Neon
const adapter = new PrismaNeon({ connectionString });

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        needs: { price: true },
        compute(product) {
          return product.price.toString();
        }
      },
      rating: {
        needs: { rating: true },
        compute(product) {
          return product.rating.toString();
        }
      }
    }
  }
});
