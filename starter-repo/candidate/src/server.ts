import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { logger } from "./lib/logger.js";
import { diligenceRunsRouter } from "./routes/diligenceRuns.js";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
  });

  app.use("/v1/diligence/runs", diligenceRunsRouter);

  app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error({ err: error }, "unhandled server error");
    res.status(500).json({ error: "internal_error" });
  });

  return app;
}

export const app = createApp();

const currentFilePath = fileURLToPath(import.meta.url);
const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : "";

if (entryPath === currentFilePath) {
  const port = Number(process.env.PORT ?? 3000);

  app.listen(port, () => {
    logger.info({ port }, "starter diligence service listening");
  });
}
