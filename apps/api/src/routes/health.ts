import { Router } from "express";

export type DatabaseCheck = () => Promise<boolean>;

export function createHealthRouter(checkDatabase: DatabaseCheck) {
  const router = Router();

  router.get("/health", async (_req, res) => {
    const dbOk = await checkDatabase();

    // 503 when the database is unreachable, so load balancers and uptime
    // monitors can tell the API is running but not able to serve requests.
    res.status(dbOk ? 200 : 503).json({
      status: dbOk ? "ok" : "degraded",
      service: "medvision-api",
      db: dbOk ? "ok" : "down",
      uptimeSeconds: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    });
  });

  return router;
}