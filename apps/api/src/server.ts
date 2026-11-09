import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./lib/logger.js";
import { prisma } from "./lib/prisma.js";

const app = createApp();

const server = app.listen(env.API_PORT, () => {
  logger.info(`MedVision API listening on http://localhost:${env.API_PORT}`);
});

function shutdown(signal: string, exitCode = 0) {
  logger.info({ signal }, "shutting down");
  server.close(async (error) => {
    await prisma.$disconnect().catch(() => undefined);
    process.exit(error ? 1 : exitCode);
  });
  // Force exit if connections do not close in time.
  setTimeout(() => process.exit(1), 10_000).unref();
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("unhandledRejection", (reason) => {
  logger.fatal({ reason }, "unhandled promise rejection");
  shutdown("unhandledRejection", 1);
});