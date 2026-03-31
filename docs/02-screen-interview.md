# Main Technical Interview

## Purpose

This interview measures whether a candidate can explore an unfamiliar repository, explain an agent-assisted plan, implement a meaningful search feature, and leave behind useful correctness and performance guardrails.

## Format

- `60 minutes`
- `1 interviewer`
- `10 minutes` for repo understanding, plan, and agent strategy
- `35 minutes` for implementation and verification
- `15 minutes` for debrief

## What the interview is testing

1. `Repo understanding before implementation`
2. `Agent-assisted exploration strategy`
3. `Algorithm and performance reasoning`
4. `Safe implementation and integration`
5. `Evidence quality`
6. `Self-healing instincts`

## Interview shape

The interview is one fixed local improvement task inside a generic search/autocomplete service.

The candidate starts by running `npm run interview:inspect`, then explains:

- how they think the repo is structured
- which code paths they want to inspect first
- at least `2` bounded AI workstreams
- which algorithm directions they want to compare before coding

After that, the candidate runs `npm run interview:task` to see the current behavior gaps and latency baseline, then works toward a meaningful local implementation and authors their own proof.

## Strong outcome definition

A strong candidate does not need to finish everything.

A strong result usually includes:

- a credible repo map before editing
- intentional multi-agent exploration
- a clear algorithm choice informed by alternatives
- one coherent code change
- at least one candidate-authored correctness check and one useful benchmark or profiling workflow
- honest articulation of remaining risks and next steps
