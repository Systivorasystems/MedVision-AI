import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";
import { z } from "zod";

// Load the monorepo root .env if present (apps/api is two levels below root).
const rootEnv = resolve(process.cwd(), "../../.env");
if (existsSync(rootEnv)) {
  config({ path: rootEnv });
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  API_PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  // Comma-separated list of allowed browser origins.
  CORS_ORIGIN: z.string().min(1).default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  const details = parsed.error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join("; ");
  throw new Error(`Invalid environment configuration: ${details}`);
}

export const env = parsed.data;
export const isProduction = env.NODE_ENV === "production";