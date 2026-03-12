---
name: plan-sprints
description: >
  Read a project's PRD and generate epics, user stories, and a prioritized sprint plan.
  Use this skill whenever the user wants to break down a PRD into actionable work, define
  epics, write or refine user stories, prioritize a backlog, plan a sprint, or figure out
  what to build first. Trigger for requests like "let's plan our first sprint", "break
  this PRD into stories", "what should we build first?", "define our epics", "create a
  backlog", or "help me prioritize". Also trigger when the user mentions sprint planning,
  backlog grooming, or story points in the context of an existing project.
---

# Sprint Planner Skill

Read the project's PRD at ./dev_docs/PRD.md, collaboratively define epics and user stories, prioritize the backlog, and generate a sprint plan — all saved to `./dev_docs/`.

---

## Workflow Overview

1. **Read** the PRD from `./dev_docs/PRD.md`
2. **Generate** epics and user stories, presenting them to the user for review
3. **Prioritize** the backlog collaboratively
4. **Define the sprint** based on duration and team capacity
5. **Save** one Markdown file per epic + a sprint plan file to `./dev_docs/`

---

## Step 1 — Read the PRD

Read `./dev_docs/PRD.md`. If it doesn't exist, tell the user:

> "I couldn't find a PRD at `./dev_docs/PRD.md`. Please make sure it exists, or let me know the correct path."

Extract the following from the PRD before proceeding:
- Project name and summary
- Goals and success metrics
- In-scope features (v1)
- Functional requirements
- User types / personas
- Known constraints

---

## Step 2 — Generate Epics & User Stories

Based on the PRD, propose a set of **epics** — high-level feature groupings. For each epic, generate a list of **user stories**.

### Epics
Group work into logical epics. Common examples for web/API projects:
- Authentication & User Management
- [Core feature area 1]
- [Core feature area 2]
- Notifications
- Admin / Organizer Tools
- Feedback & Reviews

Derive epics directly from the PRD's functional requirements and in-scope features. Aim for 4–8 epics for a typical v1.

### User Stories
For each epic, write user stories in the format:
> _"As a [user type], I want to [action], so that [outcome]."_

Each story should also include:
- **Acceptance criteria** — 2–4 bullet points describing what "done" looks like
- **Estimated complexity** — S / M / L / XL (relative sizing, not hours)

### Presenting to the User
Present epics and stories grouped clearly. Then ask:

> "Here's how I've broken down the PRD into epics and stories. Does this look right? Feel free to add, remove, rename, or split anything — this is our working backlog."

Wait for feedback and incorporate any changes before moving to prioritization.

---

## Step 3 — Prioritize the Backlog

Once the user is happy with the epics and stories, suggest a prioritized order based on:
- **Dependencies** — foundational work (auth, data models) comes first
- **User value** — stories that unlock the core user journey are high priority
- **Risk** — uncertain or complex stories should be tackled early to de-risk
- **PRD goals** — align priorities with stated success metrics

Present the prioritized backlog as an ordered list with a brief rationale for the top choices. Then ask:

> "Here's my suggested priority order, with reasoning. Do you agree, or would you like to move anything up or down?"

Be open to negotiation — the user may have context (business deadlines, dependencies, team skills) that changes the order. Update the backlog based on their feedback.

---

## Step 4 — Define the Sprint

Once the backlog is prioritized, ask the user about sprint capacity:

1. **Sprint duration** — how many weeks is this sprint? (1, 2, or 3 weeks)
2. **Team size & availability** — how many developers, and roughly how many days each will be available this sprint?
3. **Story point / complexity budget** — based on the answers above, estimate total capacity using this rough guide:
   - S = 1 point, M = 2 points, L = 4 points, XL = 8 points
   - A full-time developer for a 2-week sprint ≈ 10–12 points

Using the capacity budget, select the top stories from the prioritized backlog that fit within the sprint. Always:
- Start with any foundational stories that unblock others
- Avoid partially completing an epic unless unavoidable
- Leave a small buffer (10–15%) for unknowns

Present the proposed sprint to the user:

> "Based on your capacity, here's what I'd suggest for Sprint 1. This fits within your budget and covers the most critical foundation. Does this work?"

Allow the user to swap stories in or out before finalizing.

---

## Step 5 — Save Output

Once confirmed, save the following files to `./dev_docs/`:

### Per-Epic Files
For each epic, save a file at:
```
./dev_docs/epics/<epic-slug>.md
```
Use the template in `references/epic-template.md`.

### Sprint Plan
Save the sprint plan at:
```
./dev_docs/sprint-1.md
```
Use the template in `references/sprint-template.md`.

Create directories as needed:
```bash
mkdir -p ./dev_docs/epics
```

After saving, tell the user:
> "All done! I've saved the following files:
> - `./dev_docs/epics/<epic-slug>.md` for each epic
> - `./dev_docs/sprint-1.md` for the sprint plan
>
> You can open any of these to review or share with your team. Want me to refine anything?"

---

## Tips

- **Be opinionated but flexible.** Come with clear suggestions and reasoning — don't just ask the user what they want. But always defer when they push back.
- **Dependencies matter.** Always highlight when a story blocks or is blocked by another. Auth almost always comes first.
- **Right-size stories.** If a story is XL, suggest splitting it. If several S stories are trivially related, suggest merging them.
- **Capacity is a conversation.** If the user's capacity seems too low to deliver meaningful value, flag it gently. If they're trying to fit too much in, push back.
- **Keep it practical.** The output should be immediately usable by a developer — clear acceptance criteria, no ambiguity.
