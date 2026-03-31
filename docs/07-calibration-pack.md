# Calibration Pack

Use these profiles to align interviewers before running the interview live.

## Profile A: Strong pass

### Summary

This candidate behaves like a strong senior engineer from the beginning of the session. They form a repo model before editing, use agents surgically to understand the source and compare algorithms, then ship a coherent change with useful tests and benchmarking.

### Typical behavior

- spends the opening phase mapping the relevant modules and call path
- proposes clear agent workstreams for codebase tracing and algorithm comparison
- rejects at least one plausible approach for a good reason
- verifies the feature with a correctness test and improves the benchmark scaffold into something reusable
- explains unfinished work clearly and responsibly

### Recommendation

- `Strong Hire` or `Hire`

## Profile B: Mixed but coachable

### Summary

This candidate shows enough engineering quality to be interesting but is uneven in how they build understanding before coding or how they justify the algorithm they choose.

### Typical behavior

- gets to a workable repo model eventually, but too slowly
- uses AI productively, though sometimes too broadly
- makes some real progress, but validation or benchmarking is thinner than it should be
- debrief is honest and shows some self-awareness

### Recommendation

- `Leaning Hire` or `Leaning No`

## Profile C: Fast but low-judgment fail

### Summary

This candidate appears productive because they generate code quickly, but the signal collapses under scrutiny. They do not stay in control of the repo, the algorithm choice, or the validation story.

### Typical behavior

- begins editing immediately without tracing the code path
- asks AI to solve large swaths of the task wholesale
- picks an indexing or caching strategy without a clear reason
- does not build confidence with tests or benchmark tooling
- debrief relies on intentions rather than evidence

### Recommendation

- `No Hire` or `Strong No`

## Calibration instructions

Before launching the loop:

1. Read all three profiles as a panel.
2. Discuss where your team would draw the hire line.
3. Align on how much evidence is required to call someone strong on repo understanding, algorithm judgment, agent orchestration, and self-healing mindset.
4. Repeat calibration after the first few live candidates.
