# Interviewer Guide

## Goal of the session

Run a realistic, high-signal interview that shows how the candidate thinks and builds in an agent-heavy environment. The candidate should feel like they are solving a real Build problem, not performing a puzzle.

Your job is to observe judgment, not to reward raw output.

## Interview setup

Before the session:

- choose the `Generalist` or `Core Infrastructure` variant
- prepare the scaffold in `starter-repo/candidate/`
- choose the overlay in `starter-repo/interviewer/variant-generalist.md` or `starter-repo/interviewer/variant-core-infra.md`
- verify the baseline using `starter-repo/interviewer/scripts/run-happy-path.sh`
- have `04-scorecard.md` open during the interview

At the start:

- tell the candidate they may use normal tools and AI
- say the problem is intentionally too large to finish fully
- ask them to narrate key choices, especially around decomposition and validation
- give them only the candidate-facing scaffold, not the interviewer materials

## What to observe by phase

### First 5 minutes

Look for:

- do they pause to frame the problem?
- do they identify the three workstreams?
- do they decide what matters most?
- do they explain how they will use AI, if at all?

Strong signs:

- sketches an architecture or working slice quickly
- names risks before coding
- chooses a path that could plausibly produce signal fast

Weak signs:

- starts typing immediately with no plan
- asks AI to solve the entire prompt before reasoning
- spends the opening on low-value setup

### Middle 25 minutes

Look for:

- how they split work
- how they verify progress
- whether they stay in control of parallel outputs
- whether they notice failure modes without prompting

Strong signs:

- runs bounded parallel streams
- validates assumptions with tests, logs, or quick experiments
- keeps re-scoping based on time and evidence

Weak signs:

- too many parallel efforts with no integration strategy
- no meaningful checkpoints
- cargo-cult tests or instrumentation added without intent

### Final 15 minutes of build time

Look for:

- whether they tighten the working slice
- whether they make the state of the system legible
- whether they stop gold-plating and start communicating risk clearly

Strong signs:

- shifts from exploration to consolidation
- improves clarity around incomplete or failed paths
- leaves a teammate-friendly state

Weak signs:

- keeps expanding scope
- ignores broken edges
- cannot explain what is and is not working

### Final 15-minute debrief

Ask:

- What did you prioritize and why?
- What did you delegate to AI versus keep local?
- What gave you confidence in your result?
- Where is the system still fragile?
- What would you do with another hour?

Listen for:

- ownership
- honesty
- clear tradeoff reasoning
- operational maturity

## Hints policy

This interview is not about withholding basic context. Use hints sparingly and consistently.

Allowed hints:

- `Scope hint`
  Encourage the candidate to narrow to a meaningful slice if they are overreaching.

- `Clarification hint`
  Restate a requirement if they have misunderstood the prompt.

- `Debugging hint`
  Nudge them toward inspecting a concrete failure if they are stuck in a loop.

Avoid:

- designing the architecture for them
- telling them exactly what to code next
- rescuing them from poor prioritization too early

## Failure injection guidance

Introduce one failure between minute `18` and minute `28`.

Default failure option:

- use `starter-repo/interviewer/scripts/trigger-timeout.sh`
- this sends `x-interview-failure: power_timeout`
- the power analyzer will exceed the starter timeout budget in a deterministic way

You are not testing whether the candidate predicts the exact failure. You are testing:

- whether they can diagnose it
- whether they preserve clarity
- whether they degrade gracefully
- whether they re-scope without panicking

The baseline repo already logs the timeout and returns a weak but visible partial result. The candidate should still have meaningful room to improve task state handling, warnings, and operator clarity.

## What not to overweight

- lots of generated code
- perfect polish
- framework-specific fluency
- impressive prompting theater

Strong AI use should increase confidence because it is controlled and verified, not because it produces large volumes of output.

## Variant adjustments

### Generalist

Pay closer attention to:

- API shape
- output usability
- prioritization under ambiguity
- ability to simplify for human consumers

### Core Infrastructure

Pay closer attention to:

- state transitions
- retries and idempotency
- backpressure or concurrency handling
- operator trust and observability

## Decision guidance

Strong candidates usually do not finish everything. They usually:

- frame the problem fast
- pick a smart slice
- use tools intentionally
- create trust with evidence
- leave behind a coherent system

Weak candidates often appear productive while actually increasing risk. Do not let visible code volume outweigh poor judgment.
