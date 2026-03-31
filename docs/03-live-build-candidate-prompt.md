# Main Technical Interview Candidate Prompt

## Candidate-facing overview

This is a repo-understanding interview. You may use your normal editor, AI agents, documentation, and internet access.

We care about how you understand an unfamiliar system, how you compare approaches, how you use multiple agents with good boundaries, and how you create confidence in what you ship.

## Format

- `60 minutes` total
- `10 minutes` to explain how you will understand the repo and use agents
- `35 minutes` to inspect, implement, and verify
- `15 minutes` to debrief tradeoffs, confidence, and next steps

## Allowed tools

You may use:

- your normal editor or IDE
- AI coding tools and agents
- documentation and web search
- terminal tools, tests, and quick experiments

We want you to think before you delegate. Start by explaining how you will map the repo and which parts you want to hand to agents versus keep local.

## The scenario

You are joining an existing search/autocomplete service.

The current service already:

1. exposes `GET /v1/search/suggest`
2. normalizes search queries
3. builds a basic search index
4. returns title-prefix suggestions using a naive scan

Your job is to understand the current system and extend it with a more capable search behavior.

## How to work in the repo

Start with:

```bash
npm install
npm test
npm run interview:inspect
```

Then explain:

- how you think the repo is structured
- what you need to inspect before coding
- at least `2` bounded AI workstreams you want to use
- which algorithm directions you want to compare before committing

After that, run:

```bash
npm run interview:task
```

That command is a diagnostic report for the current implementation. It shows search gaps and latency characteristics you should use to choose what to improve first. It is not the proof of completion.

## The local improvement task

Extend the search service so query tokens can match:

- `title`
- `aliases`
- `tags`

And support:

- `multi-token` matching
- `token-order-insensitive` matching
- a coherent response shape that still exposes operator-facing debug information

You should improve relevance and think about latency. Do not blindly accept the first algorithm an agent suggests. Compare at least two plausible strategies before you commit.

## Required working style

During the first `10 minutes`, be ready to describe at least two bounded AI workstreams such as:

- repo tracing / call-path understanding
- algorithm comparison and ranking/index alternatives
- optional: benchmark or test design

By the end of the session, we want to see not only the feature work, but also:

- at least one correctness test you author and would keep using
- a benchmark or profiling workflow you create or upgrade to self-heal and optimize this search path later

## What we are looking for

We are looking for:

- clear repo understanding before implementation
- intentional multi-agent use
- thoughtful algorithm comparison
- meaningful progress on one coherent change
- candidate-authored proof that your solution can be trusted and tuned later
- honest articulation of tradeoffs and remaining risks

## Shared acceptance bar

By the end of the session, we want to see:

- a credible explanation of the relevant code paths
- a concrete implementation, not only a design
- visible verification through tests or targeted scenarios you author locally
- evidence that you can use agents without surrendering ownership
- a benchmark or profiling step you created or improved that would help future optimization
- a concise explanation of what you changed, what you rejected, and what you would do next
