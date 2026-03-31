# Screen Interview

## Purpose

The screen interview is a fast filter for whether the candidate is likely to succeed in the Build environment before investing in the live build.

This round should answer:

- Does the candidate show high agency?
- Do they use AI as leverage or as a crutch?
- Do they think about product and systems together?
- Can they explain their working style clearly and honestly?

## Format

- `30 minutes`
- `1 interviewer`
- conversational, but evidence-seeking

## Core competencies

- agency and ownership
- product sense
- systems thinking
- AI working style
- communication quality

## Recommended question set

Use the full set for calibration. In steady state, choose the strongest `5-6` prompts.

### 1. Build something recent

"Tell me about the most important thing you built recently. What was the real problem, what did you choose not to build, and what was hard about it?"

Strong signal:

- talks in terms of outcomes and constraints
- shows independent decision-making
- explains tradeoffs without hand-waving

Weak signal:

- only describes implementation detail
- cannot explain why the approach made sense

### 2. AI working style

"When you use Claude, Codex, Cursor, or similar tools, what parts of the process do you delegate and what parts do you insist on doing yourself?"

Strong signal:

- has a clear mental model for when AI helps
- keeps architecture, risk, and validation owned by the engineer
- can describe concrete prompting and review habits

Weak signal:

- delegates entire features blindly
- cannot explain how they verify outputs

### 3. Pressure-testing AI output

"Tell me about a time an AI tool gave you something plausible but wrong. How did you catch it?"

Strong signal:

- uses benchmarks, logging, edge cases, or targeted tests
- learns from the failure and adapts workflow

Weak signal:

- has no real example
- relies on vibes or visual inspection

### 4. Systems judgment

"Describe a system you have worked on that had an ugly real-world failure mode. What caused it and what changed afterwards?"

Strong signal:

- understands operational mechanics
- can explain blast radius and remediation
- talks about guardrails and learning loops

Weak signal:

- stays abstract
- focuses on who was at fault instead of what needed to change

### 5. Product judgment

"Tell me about a time you changed a technical plan because the product or user reality made the original plan wrong."

Strong signal:

- treats product as part of engineering
- shows willingness to simplify
- can articulate user impact

Weak signal:

- thinks product tradeoffs are someone else's job

### 6. Parallel execution

"When you have multiple things to move at once, how do you decide what to parallelize, what to sequence, and how to keep context from collapsing?"

Strong signal:

- can identify independent workstreams
- talks about integration discipline
- knows that not all work should be parallelized

Weak signal:

- assumes more threads always means more speed
- has no strategy for merging outputs safely

### 7. Self-healing code

"What have you done in past projects to make your code easier to operate, debug, or improve over time?"

Strong signal:

- mentions logging, metrics, rate limits, retries, feature flags, backpressure, or docs
- thinks in terms of reducing future pain

Weak signal:

- equates self-healing with only writing unit tests

## Interviewer scoring notes

Advance candidates who:

- already sound like they own outcomes
- can describe concrete AI workflows without sounding dependent on them
- show operational maturity
- think about users and teammates naturally

Do not advance candidates who:

- cannot describe their own decision-making
- speak mostly in generated abstractions
- have no real examples of debugging or failure recovery

## Pass threshold

The screen should not require perfection. It should require confidence that the candidate is likely to be strong in the live build.

Advance if the candidate is:

- clearly high-agency
- credible on systems and product
- thoughtful about AI use

Hold or reject if the candidate is:

- vague on ownership
- obviously over-reliant on AI
- unable to discuss failure modes or tradeoffs in concrete terms
