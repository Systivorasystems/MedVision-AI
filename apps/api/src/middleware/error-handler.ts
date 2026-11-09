import type { ErrorRequestHandler, RequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "../lib/app-error.js";
import { logger } from "../lib/logger.js";

export const notFoundHandler: RequestHandler = (req, _res, next) => {
  next(new AppError(404, "NOT_FOUND", `Route ${req.method} ${req.path} not found`));
};

/**
 * Last middleware. Converts any error into one consistent JSON shape:
 * { error: { code, message, requestId, details? } }
 * Unexpected errors are logged in full but never exposed to the client.
 */
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const requestId = String(res.locals.requestId ?? "unknown");

  let status = 500;
  let code = "INTERNAL_ERROR";
  let message = "An unexpected error occurred.";
  let details: unknown;

  if (err instanceof AppError) {
    status = err.statusCode;
    code = err.code;
    message = err.message;
    details = err.details;
  } else if (err instanceof ZodError) {
    status = 400;
    code = "VALIDATION_ERROR";
    message = "Request validation failed.";
    details = err.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
  } else if (
    typeof err === "object" &&
    err !== null &&
    "status" in err &&
    typeof err.status === "number" &&
    err.status >= 400 &&
    err.status < 500
  ) {
    // Client errors raised by Express itself, e.g. malformed JSON bodies.
    status = err.status;
    code = "BAD_REQUEST";
    message = "The request could not be processed.";
  }

  if (status >= 500) {
    logger.error({ err, requestId }, "unhandled error");
  } else {
    logger.warn({ requestId, code, status }, "request rejected");
  }

  res.status(status).json({
    error: { code, message, requestId, ...(details ? { details } : {}) },
  });
};