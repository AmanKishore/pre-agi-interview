# Generic Repo-Understanding Search Interview

This repository is a generic main technical interview for evaluating how an engineer explores an unfamiliar codebase, chooses an implementation strategy, uses multiple AI agents with good boundaries, and leaves behind useful validation and benchmarking tools.

## Start here

Run:

```bash
npm install
npm test
npm run interview:inspect
```

Spend the first `10 minutes` explaining:

- how you think the repo is structured
- which call paths or modules you want to inspect first
- at least `2` bounded AI workstreams you want to use
- which algorithm directions you want to compare before coding

After that, run:

```bash
npm run interview:task
```

That command prints a diagnostic report on the current search behavior and latency baseline.

## What this interview is testing

We want to see whether a candidate can:

- build a credible model of an unfamiliar repo before editing
- use multiple agents to explore the source and compare solution strategies
- reason about algorithm choice and latency tradeoffs, not just code generation
- make one coherent change in the right place
- add tests and benchmarks that improve the system over time
- communicate tradeoffs, confidence, and remaining risks clearly

## Repo layout

- `src/`: application code for the search service
- `tests/`: baseline smoke coverage for the starting repo
- `scripts/`: interview helper scripts, sample queries, and baseline benchmark
- `fixtures/`: seeded catalog and benchmark query corpus
- `docs/`: internal rubric, interviewer guide, and calibration material

## Core workflow

The main commands are:

```bash
npm install
npm test
npm run interview:inspect
npm run interview:task
```

Useful optional commands:

```bash
npm run sample:queries
npm run benchmark:baseline
npm run dev
```

## Final interview expectation

The built-in scripts are not the proof of completion.
`npm run interview:task` is intentionally diagnostic rather than a hidden acceptance gate.

A strong candidate also leaves behind:

- at least one correctness test they author and would keep using
- a benchmark or profiling workflow they create or upgrade to self-heal and optimize the search path later
- a clear explanation of the algorithm they chose, what they rejected, and why

## Internal docs

The repo also contains internal interview docs under `docs/`.

Those docs are versioned alongside the exercise to keep the repo coherent, but the interview is not designed to depend on hiding them. The signal comes from repo understanding, bounded agent use, algorithm judgment, safe integration, and useful validation.
