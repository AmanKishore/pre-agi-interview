# Pilot and Recalibration Plan

## Objective

Validate that this generic repo-understanding interview produces clear, repeatable signal before it becomes a default technical hiring loop.

## Pilot group

Run the interview with `3-5` internal engineers across a mix of:

- stronger and weaker interview performers
- product-heavy and systems-heavy backgrounds
- different levels of familiarity with AI agents and benchmarking workflows

Include at least:

- one engineer who would clearly pass the intended bar
- one engineer near the margin
- one engineer who should clearly fail

## What to validate

### 1. Strong candidates naturally show the intended behaviors

We should see that stronger internal participants:

- create a repo-understanding strategy before coding
- use multiple agents with bounded workstreams
- compare multiple algorithm directions before choosing one
- add at least one correctness check and one benchmark or profiling tool

### 2. Average candidates cannot brute-force the interview without understanding the repo

The exercise should be shaped so that a candidate who dives into implementation without building a system model loses time and quality quickly.

### 3. Interviewers reach similar conclusions

Different interviewers using the same scorecard should land in the same general place on:

- hire versus no hire
- strongest signal
- biggest concern
- whether the candidate actually understood the repo or just patched locally

### 4. The format works on a separate laptop or phone screen

The candidate should be able to complete the interview without:

- starting a separately managed server
- exposing a port
- letting the interviewer interact with their machine directly

## Metrics to watch

- time to first credible repo model
- quality of the proposed agent workstreams
- whether candidates compare more than one algorithm direction
- whether candidates create a useful future benchmark or regression guardrail
- interviewer agreement on the final decision

## Revision triggers

Revise the repo or rubric if:

- too many strong engineers get stuck in repo orientation
- weak candidates can still look strong through output volume alone
- the task can be completed without thinking about algorithm tradeoffs
- candidates can pass without leaving behind useful validation or benchmark tooling
- interviewers disagree consistently on pass or fail
