import fs from "node:fs/promises";
import path from "node:path";
import request from "supertest";
import { createApp } from "../src/server.js";

const fixtureArg = process.argv[2] ?? "fixtures/site-packet.happy.json";
const fixturePath = path.resolve(process.cwd(), fixtureArg);
const payload = JSON.parse(await fs.readFile(fixturePath, "utf8"));

const response = await request(createApp())
  .post("/v1/diligence/runs")
  .set("content-type", "application/json")
  .send(payload);

console.log(JSON.stringify(response.body, null, 2));

if (response.status >= 400) {
  process.exitCode = 1;
}
