/**
 * An error that is safe to show to the client.
 * Throw this for expected failures (not found, forbidden, invalid input).
 */
export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "AppError";
  }
}