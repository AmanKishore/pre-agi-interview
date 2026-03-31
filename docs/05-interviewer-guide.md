# Interviewer Guide

## Goal of the session

Run a realistic, high-signal technical interview that shows how the candidate explores an unfamiliar repo, uses multiple agents intentionally, compares algorithm choices, and then makes one meaningful change safely.

Your job is to observe judgment, not to reward raw output.

## Interview format

Recommended timing:

1. `10 minutes` for repo understanding, plan, and agent strategy
2. `35 minutes` for implementation and verification
3. `15 minutes` for debrief

The interview should work without a separate running server or any manual interaction with the candidate's machine beyond verbal prompts.

## Setup

Before the session:

- prepare the repo root
- run `npm install` and `npm test`
- verify:
  - `npm run interview:inspect`
  - `npm run interview:task`
  - optional: `npm run benchmark:baseline`
- have `docs/04-scorecard.md` open during the interview

Notes:

- `npm test` should pass.
- `npm run interview:task` should run successfully and show the current behavior gaps and latency baseline.

## Recommended flow

### First 10 minutes: repo understanding and plan

Ask the candidate to run:

```bash
npm run interview:inspect
```

Then ask them to explain:

- how they think the system is structured
- what they want to inspect before coding
- at least `2` bounded AI workstreams
- which algorithm directions they want to compare before committing

Strong signs:

- maps the repo before editing
- uses one agent workstream for codebase understanding and another for algorithm comparison
- names tradeoffs between simpler and more optimized approaches

Weak signs:

- starts implementing immediately with no system model
- asks AI to solve the whole task before understanding the repo
- picks an algorithm with no comparison or justification

### Next 35 minutes: implementation and verification

After the plan discussion, tell the candidate to run:

```bash
npm run interview:task
```

Observe:

- how they use the diagnostic report to choose a first slice
- how they inspect the source before editing
- whether they choose good edit points
- whether they use AI to summarize modules, compare algorithms, or propose bounded changes
- whether they integrate safely instead of scattering patches
- whether they add candidate-authored correctness checks and a benchmark or profiling path

### Final 15 minutes: debrief

Ask:

- How did you decide what to inspect first?
- What did each agent workstream do for you?
- Which algorithms did you compare and why did you choose the one you shipped?
- What gave you confidence in correctness and latency?
- What benchmark or profiling step would you keep using to self-heal this path later?
- What would you do with another hour?

## Hints policy

Allowed hints:

- `Scope hint`
  Encourage the candidate to narrow to one coherent search improvement if they are overreaching.

- `Exploration hint`
  Encourage them to explain how they will map the codebase or compare algorithms if they are flailing.

- `Validation hint`
  Nudge them toward adding a benchmark or correctness test if they are hand-waving confidence.

Avoid:

- naming the exact file they should edit
- picking the algorithm for them
- rescuing them from weak exploration strategy too early

## What to look for

Strong candidates usually:

- think before delegating
- use multiple agents with clear boundaries
- compare at least two credible algorithm directions
- make one coherent change in the right place
- add evidence they authored that they or a teammate could reuse later

Weak candidates often:

- look busy without understanding the source
- treat AI summaries as truth
- choose fancy-sounding strategies without fit
- produce code without a useful future benchmark or regression check

## What not to overweight

- lots of generated code
- perfect polish
- advanced jargon about indexes or caching
- impressive prompting theater without evidence

Strong AI use should increase confidence because it is controlled and verified, not because it produces large volumes of output.
