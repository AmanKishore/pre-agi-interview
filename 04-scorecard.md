# Scorecard

## Scale

Use a `1-4` scale for each category.

- `1`: concerning
- `2`: mixed / below bar
- `3`: strong
- `4`: exceptional

Do not mechanically average the scores. Use them to support a reasoned hiring decision.

## 1. Problem framing

### 1

- starts coding without isolating the problem
- misses obvious constraints
- cannot explain why their plan is the right first move

### 2

- identifies part of the problem but not the leverage points
- frames the task only at implementation level
- needs prompting to recognize scope and priorities

### 3

- quickly names constraints, risks, and likely high-leverage paths
- chooses a sensible working slice
- re-scopes intelligently when time or failure requires it

### 4

- frames the problem with unusual clarity
- identifies the best path quickly
- makes principled tradeoffs under ambiguity without losing momentum

## 2. Agent orchestration

### 1

- outsources thinking wholesale
- accepts generated output without review
- spawns parallel work that they cannot integrate

### 2

- uses AI competently for isolated tasks
- shows some review discipline
- parallelizes in a basic way but with uneven control

### 3

- delegates intentionally
- gives agents bounded tasks
- verifies and integrates outputs carefully
- chooses parallelism where it actually helps

### 4

- uses agents like a strong technical lead would use a capable team
- decomposes work cleanly
- maintains coherence across threads
- adjusts strategy as signal changes

## 3. Execution quality

### 1

- little meaningful progress
- thrashes between directions
- does not leave behind a credible working slice

### 2

- makes some progress but with weak prioritization
- spends too much time on low-value implementation detail
- working slice is partial and poorly explained

### 3

- converges on a useful slice
- uses time well
- keeps momentum without becoming chaotic

### 4

- makes unusually strong progress for the time available
- keeps the workstream coordinated and coherent
- leaves behind a solution another engineer could confidently pick up

## 4. Robustness and self-healing

### 1

- ignores failure modes
- treats success path as sufficient
- ships code with silent or ambiguous failure states

### 2

- notices some reliability concerns
- adds limited safeguards
- misses important operational gaps until prompted

### 3

- proactively handles malformed input, retries, timeouts, or status visibility
- adds enough logging, testing, or tracing to create trust
- clearly distinguishes incomplete from failed states

### 4

- designs for real-world messiness from the start
- uses observability and control points elegantly
- leaves the system materially easier to operate and extend

## 5. Product judgment

### 1

- builds in a vacuum
- ignores user or teammate consequences
- optimizes for technical novelty over usefulness

### 2

- shows some awareness of consumers
- can discuss tradeoffs after prompting
- misses opportunities to simplify for actual use

### 3

- makes decisions that reflect user and business reality
- balances speed, simplicity, and correctness well
- produces an output shape that feels usable

### 4

- consistently ties technical choices to product leverage
- anticipates downstream needs without overbuilding
- improves clarity for both end users and internal operators

## 6. Communication and ownership

### 1

- opaque working style
- vague on tradeoffs
- defensive or disengaged when things go wrong

### 2

- understandable but uneven communication
- some ownership, but gaps in surfacing risk or uncertainty

### 3

- communicates clearly while working
- names tradeoffs and risks directly
- behaves like an owner, especially under failure or time pressure

### 4

- consistently increases confidence for the interviewer
- explains thinking crisply without over-narrating
- shows mature ownership over both progress and shortcomings

## Red flags

These should weigh heavily even if the candidate writes a lot of code:

- `AI overreliance`
  The candidate cannot describe their own plan apart from generated output.

- `Shallow validation`
  The candidate claims confidence without targeted evidence.

- `Sloppy merge behavior`
  The candidate runs multiple threads or agents but does not reconcile conflicts or inconsistencies carefully.

- `Unowned failure modes`
  The candidate sees failure during the session and still leaves the system ambiguous or silent.

- `Code volume theater`
  The candidate optimizes for visible output rather than trustworthy progress.

## Variant emphasis

Use the same rubric for both variants, but shift emphasis slightly:

- `Generalist`
  Weight product judgment and output usability more heavily.

- `Core Infrastructure`
  Weight robustness, state handling, and operational clarity more heavily.

## Overall recommendation labels

Use one of these outcomes in debrief:

- `Strong Hire`
- `Hire`
- `Leaning Hire`
- `Leaning No`
- `No Hire`
- `Strong No`
