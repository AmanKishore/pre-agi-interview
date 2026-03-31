# Scorecard

## Scale

Use a `1-4` scale for each category.

- `1`: concerning
- `2`: mixed / below bar
- `3`: strong
- `4`: exceptional

Do not mechanically average the scores. Use them to support a reasoned hiring decision.

## 1. Repo understanding and framing

### 1

- starts coding without a credible repo model
- cannot explain the relevant call path
- misses obvious seams or constraints

### 2

- finds part of the system, but not the important boundaries
- frames the task mostly at implementation detail level
- needs prompting to choose a sensible slice

### 3

- quickly builds a credible model of the repo
- identifies likely edit points and data flow
- chooses a sensible, high-leverage slice

### 4

- maps the system with unusual clarity
- isolates the right seams quickly
- reduces risk meaningfully before coding

## 2. Agent-assisted exploration and orchestration

### 1

- outsources understanding wholesale
- cannot explain what different agents were asked to do
- accepts agent output without synthesis

### 2

- uses AI competently for isolated tasks
- shows some review discipline
- delegation boundaries are uneven or noisy

### 3

- proposes bounded workstreams intentionally
- uses AI to trace modules, compare options, or find edit points
- integrates exploration results carefully before coding

### 4

- uses multiple agents like a strong technical lead uses a team
- decomposes work cleanly and keeps strong ownership
- moves fast without losing coherence

## 3. Algorithm judgment and performance reasoning

### 1

- picks the first plausible algorithm without comparison
- ignores latency or scaling implications
- cannot explain tradeoffs

### 2

- considers more than one approach but shallowly
- notices some performance concerns
- reasoning is incomplete or reactive

### 3

- compares multiple plausible approaches before committing
- chooses a reasonable balance of simplicity, correctness, and latency
- can explain why the chosen strategy fits the repo and time budget

### 4

- reasons exceptionally well about algorithm and latency tradeoffs
- chooses an approach that is both practical now and extensible later
- uses evidence rather than intuition alone to decide

## 4. Implementation and safe integration

### 1

- little meaningful progress
- edits code without understanding where the change belongs
- leaves behind a brittle patch

### 2

- makes some progress but with weak edit-point selection
- change works only locally or incidentally
- integration across modules is uneven

### 3

- makes one coherent, well-placed change
- integrates across the relevant modules carefully
- preserves the public interface while improving behavior

### 4

- makes unusually strong progress for the time available
- chooses excellent edit points
- leaves behind a result another engineer could confidently extend

## 5. Evidence and self-healing mindset

### 1

- claims confidence without evidence
- does not add useful tests or measurements
- relies only on built-in repo scripts as proof
- leaves no path for future optimization

### 2

- adds limited validation
- notices the need for measurement but does not make it useful
- future tuning path remains weak

### 3

- adds at least one meaningful correctness check they authored
- creates or upgrades a benchmark or profiling step that could guide future work
- uses evidence to explain confidence and remaining risk

### 4

- builds unusually strong trust for the time available
- turns tests and benchmarks into clear future leverage
- leaves behind tools another engineer could use to self-heal the system later

## 6. Communication and ownership

### 1

- opaque working style
- vague on tradeoffs or delegation choices
- defensive or disengaged when challenged

### 2

- understandable but uneven communication
- some ownership, but gaps in surfacing uncertainty

### 3

- communicates clearly while working
- names tradeoffs and delegation choices directly
- behaves like an owner under time pressure

### 4

- consistently increases interviewer confidence
- explains thinking crisply without over-narrating
- shows mature ownership over both progress and shortcomings

## Red flags

These should weigh heavily even if the candidate writes a lot of code:

- `AI overreliance`
  The candidate cannot explain the repo apart from agent output.

- `Shallow repo comprehension`
  The candidate patches locally without understanding the call path they touched.

- `Algorithm cargo culting`
  The candidate adopts an indexing or caching strategy because it sounds advanced, not because it fits the problem.

- `Shallow validation`
  The candidate claims confidence without targeted tests or measurements of their own.

- `No self-healing path`
  The candidate leaves no useful benchmark, profiling path, or regression guardrail behind.
