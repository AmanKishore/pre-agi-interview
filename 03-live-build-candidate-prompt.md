# Live Build Interview Candidate Prompt

## Candidate-facing overview

This interview is designed to feel like real work at Build. You may use your normal editor, AI tools, documentation, and internet access. We care about how you think, what you choose to build, how you use leverage, and how you create confidence in your solution.

You are not expected to finish everything. In fact, the exercise is intentionally too large to complete serially in the available time.

We are looking for:

- clear problem framing
- thoughtful decomposition
- good use of AI and parallel execution
- meaningful progress on a working slice
- evidence that your solution is reliable and maintainable
- honest articulation of risks and next steps

## Format

- `45 minutes` hands-on build time
- `15 minutes` debrief

## Allowed tools

You may use:

- your normal editor or IDE
- AI coding tools and agents
- documentation and web search
- terminal tools, tests, and quick benchmarks

Please narrate your thinking as you work, especially when you:

- choose a direction
- split work in parallel
- decide what to validate
- change course

## The scenario

Build is rolling out an internal "site diligence orchestration" service used by domain experts evaluating high-priority built-world opportunities.

For each site packet, the service should:

1. accept and normalize incoming diligence data
2. fan out work to several analysis tasks
3. return a structured status summary with clear failure states

The system is used on high-stakes opportunities where silent failure is unacceptable.

## Your task

Build a meaningful working slice of this service.

The interview is intentionally shaped so that there are at least three parallelizable workstreams:

1. `Intake and normalization`
   Accept a site packet and normalize it into a stable internal representation.

2. `Task orchestration`
   Launch multiple analysis tasks from the normalized packet and track their state.

3. `Reliability and observability`
   Add enough logging, error handling, status reporting, and guardrails that another engineer could operate or extend the slice responsibly.

You do not need to solve every part. We care more about the quality of your approach than total surface area.

## Shared acceptance bar

By the end of the session, we want to see:

- a meaningful working slice, not only a design
- at least one clear example of parallel decomposition
- at least one validation mechanism such as a test, benchmark, trace, or targeted failure case
- explicit treatment of failure states
- a concise explanation of what you built, what remains, and what risks you would address next

## Starter repo the candidate should receive

The candidate should receive a small starter repository that includes:

- a minimal service scaffold
- one happy-path `site packet` fixture
- one messy `site packet` fixture
- one or two intentionally messy fields in the input
- an interface or stub for analysis tasks
- a basic README with commands to run the scaffold

The repo should be small enough to orient in under five minutes.

The starter repo should be runnable with:

- `npm install`
- `npm run dev`
- `npm test`
- `npm run sample:happy`
- `npm run sample:messy`

The candidate should primarily work inside the provided service scaffold rather than building the entire exercise from zero.

## Example site packet shape

The exact format may vary by implementation language. A representative input should include fields like:

```json
{
  "siteId": "nyc-dc-017",
  "submittedBy": "acquisitions@build.inc",
  "assetType": "data-center",
  "location": {
    "city": "New York",
    "state": "NY"
  },
  "documents": [
    {
      "type": "zoning-summary",
      "status": "received"
    },
    {
      "type": "environmental-note",
      "status": "received"
    }
  ],
  "requestedChecks": [
    "zoning",
    "power",
    "environmental"
  ],
  "priority": "high"
}
```

## Interviewer-injected failure

During the session, the interviewer will introduce one failure. Examples:

- malformed or missing input field
- task timeout
- model response inconsistency
- rate limiting or concurrency cap

In the default starter repo, the interviewer should use a deterministic timeout path so the failure is consistent across sessions.

The goal is not to trick you. The goal is to see how you recover, rescope, and preserve system clarity under stress.

## What we care about more than polish

- whether you create a sensible plan before coding
- whether you use agents intentionally
- whether you notice dangerous gaps
- whether you build confidence instead of just output
- whether you can leave the system in a state a teammate would trust

## Variant: Generalist

Use this variant when hiring for product-oriented early-stage engineers.

Emphasize:

- API design and data modeling
- useful output shape for domain users
- prioritization under ambiguity
- product-minded tradeoffs

Suggested extra requirement:

"Return a concise summary object that a downstream UI could render for a human reviewer."

Signals to watch:

- candidate thinks about consumer experience
- candidate keeps the system simple where possible
- candidate notices schema usability and edge cases

## Variant: Core Infrastructure

Use this variant when hiring for platform or reliability-heavy roles.

Emphasize:

- orchestration reliability
- backpressure and concurrency control
- retries, idempotency, and state transitions
- observability and operator trust

Suggested extra requirement:

"Design the task orchestration so that partial completion, retries, and timeouts are visible and safe rather than silent."

Signals to watch:

- candidate models state cleanly
- candidate handles operational failure modes early
- candidate adds instrumentation that would help a real on-call engineer

## Debrief prompts

Save the last `15 minutes` for discussion. Ask the candidate:

- What did you prioritize and why?
- What did you delegate to AI, and why those pieces?
- What gave you confidence in what you shipped?
- What would break first in a real production setting?
- If you had another hour, what would you do next?

## Interviewer note

Do not evaluate candidates primarily on total lines of code or on whether they complete the whole exercise. The prompt is designed so that a strong candidate wins by framing, decomposing, validating, and communicating well.
