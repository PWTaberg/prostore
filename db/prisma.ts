import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Create a Neon connection pool
const pool = new Pool({ connectionString });

//  Instantiate Prisma adapter with Neon
const adapter = new PrismaNeon({ connectionString });

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      //price -> priceString
      price: {
        //needs: { price: true },
        compute(product) {
          return product.price.toString();
        }
      },
      // rating->ratingString
      rating: {
        //needs: { rating: true },
        compute(product) {
          return product.rating.toString();
        }
      }
    }
  }
});
