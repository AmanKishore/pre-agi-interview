# Variant Overlay: Core Infrastructure

Use this overlay for platform or reliability-heavy engineering roles.

## Emphasis

- orchestration reliability
- retries, timeouts, and idempotency
- state transitions and partial completion
- observability and operator trust

## Extra prompt

"Design the task orchestration so that partial completion, retries, and timeouts are visible and safe rather than silent."

## What strong candidates often do

- model task state clearly
- improve timeout behavior without hiding failure
- add logs, warnings, or metrics that would help an on-call engineer
- talk naturally about concurrency limits, retries, and operational blast radius
- move beyond the starter's generic failed state into something operators can act on
