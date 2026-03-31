# Build Agent-Age Engineering Interview Kit

This package turns a rough point of view on hiring in the age of agents into a concrete interview loop for Build.

It is designed for senior-plus early-stage engineering hires and assumes Build wants engineers who can:

- think clearly before delegating
- use agents as force multipliers rather than substitutes for judgment
- ship reliable systems under ambiguity
- reason about product impact, not just implementation
- split work in parallel and manage context without losing control

## What is in this kit

- `01-hiring-philosophy.md`: the hiring memo and bar definition
- `02-screen-interview.md`: the first-round screen for agency, product sense, and AI working style
- `03-live-build-candidate-prompt.md`: the flagship live build prompt with generalist and core infrastructure variants
- `04-scorecard.md`: the anchored rubric used across the loop
- `05-interviewer-guide.md`: pacing, observation guidance, hints policy, and failure injection rules
- `06-debrief-form.md`: the structured writeup template for interviewers
- `07-calibration-pack.md`: sample pass, mixed, and fail profiles for calibration
- `08-pilot-plan.md`: rollout and recalibration plan
- `starter-repo/`: the runnable live-build exercise with candidate and interviewer sections

## Starter repo layout

The live-build prompt now has a concrete starter implementation in `starter-repo/`.

- `starter-repo/candidate/`: the runnable Node/TypeScript service the candidate works in
- `starter-repo/interviewer/`: the runbook, variant overlays, and failure-injection scripts

The starter repo is intentionally incomplete. It gives candidates a real surface area to work in without solving the interesting parts for them.

## Loop overview

The recommended interview sequence is:

1. `Screen interview`
2. `Live build interview`
3. `Self-healing review`

The screen interview checks whether the candidate already operates like a high-agency Build engineer.

The live build interview is the core assessment. It runs as:

- `45 minutes` of hands-on work
- `15 minutes` of debrief

Candidates may use their normal editor, AI tools, docs, and internet access. The interview does not try to remove leverage. It measures how they use leverage.

The self-healing review can be folded into the debrief for faster loops or run as a separate discussion in later-stage hiring.

## How to use this kit

1. Choose a role variant:
   - `Generalist`
   - `Core Infrastructure`
2. Give the candidate the scaffold from `starter-repo/candidate/`.
3. Run the session with `05-interviewer-guide.md` and `starter-repo/interviewer/README.md` open.
4. Use the role overlay in `starter-repo/interviewer/variant-generalist.md` or `starter-repo/interviewer/variant-core-infra.md`.
5. Score the interview live using `04-scorecard.md`.
6. Write the decision memo from `06-debrief-form.md`.
7. Recalibrate against `07-calibration-pack.md` before the process goes live.

## Design principles behind the loop

- Do not reward raw code volume.
- Do not reward polished AI output without ownership.
- Do reward decomposition, validation, recovery, and judgment.
- Do reward engineers who build confidence through evidence.
- Do reward engineers who lower future operational pain.

## What this kit intentionally avoids

- LeetCode-style puzzle rounds
- toy systems questions with no product context
- interview formats where candidates are punished for using modern tools
- interview rubrics that confuse fast typing with strong engineering

## Recommended operating cadence

- Pilot with `3-5` internal engineers before using the loop externally.
- Review outcomes after the first `5` real candidates.
- Revisit the exercise and rubric every quarter or after a meaningful change in agent capabilities.
