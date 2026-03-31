# Hiring Philosophy for Engineers in the Age of Agents

## Why Build needs a different bar

Build is not hiring for a world where the primary bottleneck is manual code production. The bottleneck is increasingly judgment: choosing the right problem framing, decomposing work well, using agents without surrendering thinking, and shipping systems that continue to work when real conditions are messy.

That matters even more at Build because the company sits at the intersection of:

- high-stakes enterprise workflows
- long-running and failure-prone agentic systems
- real customer trust
- speed as a strategic advantage

An engineer who can generate code quickly but cannot reason about reliability, failure modes, and product consequences will create drag. An engineer who can think independently, use AI well, and reduce future pain will compound.

## What great looks like

Great Build engineers in the age of agents consistently do the following:

- Start with an opinion.
  They do not begin by handing the entire problem to an assistant. They form a rough model first, name the key constraints, and use AI to improve the plan.

- Use agents to accelerate judgment, not replace it.
  They know when to branch work, when to stay singularly focused, and when an agent response is plausible but wrong.

- Create evidence.
  They do not rely on "this looks right." They build confidence through targeted tests, small prototypes, benchmarks, logs, and controlled failure cases.

- Write self-healing code.
  They think about the code after they merge it. They add guardrails, observability, sane defaults, and failure handling that reduce future operational burden.

- Notice the product and operational blast radius.
  They ask what happens under load, what happens when models fail, what happens when inputs are malformed, and what happens when other engineers must extend the system later.

- Parallelize intelligently.
  They can split work across agents or streams without losing coherence. They keep context tight, reunify outputs deliberately, and maintain ownership over the final result.

## What we are actually screening for

This interview kit is designed to identify six traits:

1. `Problem framing`
   The candidate can quickly isolate the real problem, constraints, and highest-leverage path.

2. `Agent leverage`
   The candidate uses AI tools deliberately, with strong prompting, verification, and integration discipline.

3. `Execution quality`
   The candidate makes practical progress, manages time well, and converges on a useful working slice.

4. `Self-healing systems thinking`
   The candidate anticipates failure modes, adds safeguards, and reduces future operational pain.

5. `Product judgment`
   The candidate balances speed, correctness, usability, and business impact rather than optimizing for elegance in a vacuum.

6. `Ownership and communication`
   The candidate narrates tradeoffs clearly, surfaces risk early, and behaves like someone who can be trusted with consequential systems.

## What weak looks like

Weak candidates often show a familiar pattern:

- They immediately outsource all reasoning to AI.
- They accept generated code without pressure testing it.
- They measure success by amount shipped rather than confidence earned.
- They treat tests as a cosmetic requirement rather than a source of signal.
- They ignore scaling and reliability concerns until prompted.
- They spawn many parallel threads but cannot integrate the results.
- They blame tools or time instead of re-scoping intelligently.

## Interview philosophy

The interview loop should feel realistic, not adversarial. Candidates are allowed to use modern tools because Build engineers use modern tools. The goal is not to remove leverage. The goal is to observe whether the candidate can direct leverage well enough to build trustworthy systems quickly.

## Decision rule

Hire people who can:

- think before delegating
- move quickly without becoming sloppy
- recover gracefully when a system misbehaves
- protect teammates from future maintenance pain
- treat AI as a powerful collaborator while remaining clearly in charge

Do not hire people who:

- are fast but ungrounded
- are fluent with tools but weak on judgment
- can produce output but not confidence
- create avoidable future operational burden
