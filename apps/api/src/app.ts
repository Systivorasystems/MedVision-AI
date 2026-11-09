import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { pingDatabase } from "./lib/prisma.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { requestContext } from "./middleware/request-context.js";
import { createHealthRouter, type DatabaseCheck } from "./routes/health.js";

export interface AppOptions {
  /** Override the database check (tests use this to avoid a real database). */
  checkDatabase?: DatabaseCheck;
}

export function createApp(options: AppOptions = {}) {
  const app = express();

  app.use(requestContext);
  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
      credentials: true,
    }),
  );
  // JSON bodies only. File uploads get their own limits in a later phase.
  app.use(express.json({ limit: "1mb" }));

  app.use(
    "/api/v1",
    createHealthRouter(options.checkDatabase ?? (() => pingDatabase())),
  );

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}