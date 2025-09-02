import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

// Zod will provide the types
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
