# Interviewer Runbook

This directory contains interviewer-only operating notes for the generic repo-understanding search interview.

The candidate should work from the repo root.

## Before the session

From the repo root, run:

```bash
npm install
npm test
npm run interview:inspect
npm run interview:task
```

Optional:

```bash
npm run benchmark:baseline
```

Notes:

- `npm test` should pass.
- `npm run interview:task` should run successfully and surface the current search gaps and latency baseline.
- The interview does not require a separately running server.
- Completion should be judged by the candidate's own tests and benchmark/profiling additions, not by the built-in scripts alone.

## During the first 10 minutes

Ask the candidate to:

- explain the repo structure
- identify likely edit points
- name at least `2` bounded agent workstreams
- describe at least `2` algorithm directions they want to compare

## During implementation

Watch for:

- whether they stay in control of the repo model
- whether they use agents to explore and compare, not just generate code
- whether they make one coherent change
- whether they add candidate-authored reusable tests and benchmark/profiling leverage

## During debrief

Ask them to summarize:

- the algorithm they chose and what they rejected
- what each agent workstream contributed
- what gives them confidence in correctness and latency
- what benchmark or self-healing tool they would keep using after the interview
