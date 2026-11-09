import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { requestContext } from "./middleware/request-context.js";
import { healthRouter } from "./routes/health.js";

export function createApp() {
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

  app.use("/api/v1", healthRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}