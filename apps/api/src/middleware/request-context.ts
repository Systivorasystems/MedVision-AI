import { randomUUID } from "node:crypto";
import type { RequestHandler } from "express";
import { logger } from "../lib/logger.js";

/**
 * Gives every request an id (returned as x-request-id) and logs one line
 * per request when it finishes. Headers and bodies are never logged.
 */
export const requestContext: RequestHandler = (req, res, next) => {
  const requestId = randomUUID();
  const startedAt = process.hrtime.bigint();

  res.locals.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - startedAt) / 1e6;
    logger.info(
      {
        requestId,
        method: req.method,
        path: req.originalUrl.split("?")[0],
        statusCode: res.statusCode,
        durationMs: Math.round(durationMs),
      },
      "request completed",
    );
  });

  next();
};