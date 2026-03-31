import request from "supertest";
import { createApp } from "../src/server.js";

const queries = ["cloud", "gpu cloud", "redis warmup", "reliability", "semantic search"];

for (const query of queries) {
  const response = await request(createApp())
    .get("/v1/search/suggest")
    .query({ q: query, limit: 3 });

  console.log(`query=${query}`);
  console.log(JSON.stringify(response.body, null, 2));
  console.log("");
}
