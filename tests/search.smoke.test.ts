import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/server.js";

describe("search suggestion service", () => {
  it("returns a health response", async () => {
    const response = await request(createApp()).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });

  it("returns title-prefix suggestions for a simple query", async () => {
    const response = await request(createApp())
      .get("/v1/search/suggest")
      .query({ q: "cloud", limit: 3 });

    expect(response.status).toBe(200);
    expect(response.body.query).toBe("cloud");
    expect(response.body.suggestions[0]).toEqual(
      expect.objectContaining({
        id: "cloud-gpu-hosting",
        title: "Cloud GPU Hosting",
        matchedOn: ["title"],
        score: expect.any(Number)
      })
    );
    expect(response.body.debug).toEqual(
      expect.objectContaining({
        strategy: "naive_title_prefix_scan",
        scannedEntries: expect.any(Number),
        matchedEntries: expect.any(Number),
        queryTokens: ["cloud"]
      })
    );
  });
});
