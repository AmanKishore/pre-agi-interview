import request from "supertest";
import happyPacket from "../fixtures/site-packet.happy.json";
import { createApp } from "../src/server.js";

describe("starter diligence service", () => {
  it("returns a health response", async () => {
    const response = await request(createApp()).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });

  it("runs the happy-path diligence flow", async () => {
    const response = await request(createApp())
      .post("/v1/diligence/runs")
      .send(happyPacket);

    expect(response.status).toBe(200);
    expect(response.body.runId).toEqual(expect.any(String));
    expect(response.body.siteId).toBe("nyc-dc-017");
    expect(response.body.overallStatus).toBe("completed");
    expect(response.body.normalizedPacket.assetType).toBe("data-center");
    expect(response.body.normalizedPacket.location.state).toBe("NY");
    expect(response.body.tasks).toHaveLength(3);
    expect(response.body.tasks.map((task: { name: string }) => task.name)).toEqual([
      "zoning",
      "power",
      "environmental"
    ]);
  });
});
