# Build Live Interview Starter Repo

This is the candidate-facing scaffold for Build's live engineering interview.

The goal is not to finish everything. The repo is intentionally shaped so there are several meaningful workstreams to split up and improve.

## What is here

- a small HTTP service
- one happy-path fixture
- one messy fixture
- three deterministic analyzer stubs
- starter normalization and orchestration logic
- one passing smoke test

## Core API

- `GET /health`
- `POST /v1/diligence/runs`

## Quickstart

```bash
npm install
npm test
npm run dev
```

In another terminal:

```bash
npm run sample:happy
npm run sample:messy
```

The service defaults to `http://localhost:3100`.

If you need a different port:

```bash
PORT=3200 npm run dev
```

Run the smoke test with:

```bash
npm test
```

## Exercise framing

You are building a meaningful slice of a "site diligence orchestration" service used by domain experts evaluating high-priority opportunities.

The main workstreams are:

1. intake and normalization
2. task orchestration
3. reliability and observability

You do not need to solve every part. A strong outcome is a credible working slice with clear tradeoffs, explicit failure handling, and evidence that the system can be trusted more than it could at the start.

## Fixtures

- `fixtures/site-packet.happy.json`
- `fixtures/site-packet.messy.json`

## Pointers

- `src/domain/normalizeSitePacket.ts` is intentionally partial.
- `src/orchestrator/runDiligence.ts` is intentionally coarse around failure and timeout handling.
- `src/analyzers/` contains deterministic stubs that are easy to extend or swap.
- `tests/diligence.smoke.test.ts` gives you one example of how to validate the scaffold quickly.

## What is intentionally underbuilt

- the happy-path fixture succeeds cleanly
- the messy fixture should produce visible warnings
- timeout failures currently collapse into a coarse failed state
- output is structured, but not yet especially operator-friendly or human-reviewer-friendly

Strong candidates usually improve clarity around failure representation, warning quality, and ambiguous input handling without trying to rebuild the entire service.
