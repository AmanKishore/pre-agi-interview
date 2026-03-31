# Pilot and Recalibration Plan

## Objective

Validate that the interview loop produces clear, repeatable signal before it is used as a core Build hiring instrument.

## Pilot group

Run the loop with `3-5` internal engineers across a mix of:

- stronger and weaker interview performers
- product-heavy and infrastructure-heavy backgrounds
- different levels of familiarity with agent tooling

Include at least:

- one engineer who would clearly pass the intended bar
- one engineer near the margin
- one engineer who should clearly fail

## What to validate

### 1. Strong candidates naturally show the intended behaviors

We should see that stronger internal participants:

- create a plan before delegating
- split work intentionally
- use AI with verification discipline
- add confidence-building evidence
- recover responsibly from injected failure

### 2. Average candidates cannot brute-force the prompt serially

The exercise should be large enough that a candidate who does not decompose or prioritize will run out of time.

### 3. Interviewers reach similar conclusions

Different interviewers using the same scorecard should land in the same general place on:

- hire versus no hire
- strongest signal
- biggest concern

## Pilot process

1. Run the screen and live build as written.
2. Have interviewers score independently before discussing.
3. Compare written evidence, not just final recommendation.
4. Record where the prompt created confusion rather than signal.
5. Revise only after reviewing multiple sessions together.

## Metrics to watch

- time to first credible problem framing
- whether candidates identify parallelizable workstreams
- whether candidates build at least one confidence mechanism
- how candidates respond to the failure injection
- interviewer agreement on the final decision

## Revision triggers

Revise the prompt or rubric if:

- too many strong internal engineers get stuck in the same low-signal way
- weak candidates can still look strong through output volume alone
- interviewers disagree consistently on pass/fail
- the failure injection feels more confusing than revealing

## Quarterly recalibration

Revisit this kit every quarter, or sooner if AI tooling meaningfully changes.

Review:

- whether the prompt is still hard in the right way
- whether current strong hires still look strong by this rubric
- whether new tool behavior changes what "good agent orchestration" looks like

## Owner

Assign one hiring owner to maintain the kit. That person should:

- collect debrief patterns
- update calibration examples
- keep variant differences intentional
- prevent the loop from drifting back toward generic coding interviews
