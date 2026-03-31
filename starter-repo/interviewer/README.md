# Interviewer Runbook for the Starter Repo

This folder contains the interviewer-only materials for the live build exercise.

The candidate should only receive the scaffold in `../candidate/`.

## Before the session

1. Open `../../04-scorecard.md` and `../../05-interviewer-guide.md`.
2. Choose the role overlay:
   - `variant-generalist.md`
   - `variant-core-infra.md`
3. In `../candidate/`, run:

```bash
npm install
npm run dev
```

4. In another terminal, validate the baseline:

```bash
./scripts/run-happy-path.sh
```

## During the session

- Give the candidate only the scaffold in `../candidate/`.
- Remind them that the repo is intentionally incomplete.
- Ask them to narrate how they frame the problem, where they parallelize, and how they validate progress.

## Default failure injection

Use the deterministic timeout path once the candidate has made some initial progress, ideally between minute `18` and minute `28`.

With the candidate server running on `http://localhost:3000`, trigger:

```bash
./scripts/trigger-timeout.sh
```

That script calls `POST /v1/diligence/runs` with:

- the happy-path fixture
- header `x-interview-failure: power_timeout`

The starter implementation will:

- log the timeout
- return a weak partial result
- leave plenty of room for the candidate to improve operator visibility and recovery behavior

## What to listen for

- do they pause to frame the problem?
- do they identify normalization, orchestration, and reliability as separate workstreams?
- do they use AI intentionally instead of outsourcing judgment?
- do they create targeted confidence through tests, logs, or controlled failure cases?
- do they re-scope cleanly after the timeout shows up?

## Baseline weaknesses by design

- normalization handles only limited aliases
- timeout handling is visible but not production-grade
- there are no retries or backpressure controls
- warnings are intentionally thin
- task-state detail is intentionally coarse

These gaps are part of the exercise, not bugs in the interview setup.
