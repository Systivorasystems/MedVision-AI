import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "../config/env.js";
import { PrismaClient } from "../generated/prisma/client.js";
import { logger } from "./logger.js";

// Prisma 7 needs a driver adapter. The client connects lazily, so importing
// this file never opens a connection by itself.
const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });

export const prisma = new PrismaClient({ adapter });

/** Returns true if the database answers a trivial query within the timeout. */
export async function pingDatabase(timeoutMs = 2000): Promise<boolean> {
  let timer: NodeJS.Timeout | undefined;
  try {
    await Promise.race([
      prisma.$queryRaw`SELECT 1`,
      new Promise((_, reject) => {
        timer = setTimeout(
          () => reject(new Error("database ping timed out")),
          timeoutMs,
        );
      }),
    ]);
    return true;
  } catch (error) {
    logger.warn({ err: error }, "database health check failed");
    return false;
  } finally {
    clearTimeout(timer);
  }
}