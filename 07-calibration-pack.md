# Calibration Pack

Use these profiles to align interviewers before running the loop live.

## Profile A: Strong pass

### Summary

This candidate behaves like a senior Build engineer from the beginning of the session. They think before they delegate, use agents surgically, and create confidence through evidence rather than theater.

### Typical behavior

- spends the first few minutes naming constraints and choosing a working slice
- splits work into bounded streams rather than chaotic parallelism
- uses AI for implementation acceleration, not for core judgment
- adds targeted logging and a small validation mechanism early
- responds to failure injection by re-framing and tightening the system
- explains unfinished work clearly and responsibly

### Example notes

"Candidate opened by outlining intake, orchestration, and reliability as separate streams. Delegated schema scaffolding and a task worker stub to AI while keeping state model and error handling local. Added explicit status transitions and a timeout path after the injected failure. Shipped a meaningful slice and had strong next-step judgment."

### Example scores

- Problem framing: `4`
- Agent orchestration: `4`
- Execution quality: `3`
- Robustness and self-healing: `4`
- Product judgment: `3`
- Communication and ownership: `4`

### Recommendation

- `Strong Hire` or `Hire`

## Profile B: Mixed but coachable

### Summary

This candidate shows enough engineering quality to be interesting but is uneven in where they create confidence. They may still be a hire if the rest of the loop is strong and the team is prepared to coach.

### Typical behavior

- frames the problem reasonably but takes too long to settle on a slice
- uses AI productively, though sometimes too broadly
- ships a partial implementation with some real signal
- notices some failure modes but leaves important gaps
- debrief is honest and shows decent self-awareness

### Example notes

"Candidate identified the core flow and made decent progress, but spent too long trying to make the happy path complete before improving robustness. They used AI effectively for scaffolding and tests, though they did not always reconcile outputs carefully. When timeout behavior was introduced, they eventually added visible status handling but only after prompting themselves to simplify."

### Example scores

- Problem framing: `3`
- Agent orchestration: `2`
- Execution quality: `3`
- Robustness and self-healing: `2`
- Product judgment: `3`
- Communication and ownership: `3`

### Recommendation

- `Leaning Hire` or `Leaning No`

Use this profile to force rigor. A pleasant, reasonably capable candidate should not automatically become a hire if they do not show strong ownership over system quality.

## Profile C: Fast but low-judgment fail

### Summary

This candidate appears productive because they generate a lot of code quickly, but the signal collapses under scrutiny. They do not remain in control of the system they are building.

### Typical behavior

- begins coding immediately without a plan
- asks AI to solve large swaths of the problem wholesale
- spawns multiple threads without a merge strategy
- does not build confidence with targeted validation
- leaves silent or ambiguous failure states in place
- debrief relies on intentions rather than observed evidence

### Example notes

"Candidate produced the most code of the calibration set but could not explain why the architecture was sensible. They delegated nearly the entire flow to AI, then spent most of the session patching inconsistent outputs. After the injected malformed input, the service either errored vaguely or failed open. The candidate seemed optimistic in the debrief but did not own the operational gaps."

### Example scores

- Problem framing: `1`
- Agent orchestration: `1`
- Execution quality: `2`
- Robustness and self-healing: `1`
- Product judgment: `2`
- Communication and ownership: `2`

### Recommendation

- `No Hire` or `Strong No`

## Calibration instructions

Before launching the loop:

1. Read all three profiles as a panel.
2. Discuss where your team would draw the hire line.
3. Align on how much evidence is required to call someone strong on robustness or agent use.
4. Repeat calibration after the first few live candidates.

## Common calibration mistakes

- confusing speed with judgment
- over-crediting polished AI output
- under-crediting candidates who re-scope intelligently
- treating "wrote tests" as equivalent to "created confidence"
- ignoring whether the system is actually teammate-safe
