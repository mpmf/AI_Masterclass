---
name: plan-project
description: >
  Plan a new software project by interactively gathering requirements and generating a
  professional PRD (Product Requirements Document) saved to ./dev_docs. Use this skill
  whenever the user wants to plan a project, define scope, set up a tech stack, assign
  roles, write a PRD, or kick off any new web app or API/backend service. Trigger even
  for vague requests like "I want to build something", "help me plan my app", "let's
  start a new project", or "I need a PRD". Also trigger when users mention product
  requirements, project scope, architecture planning, or team roles.
---

# Plan Project Skill

Help the user plan a web app or API/backend project through a structured interactive interview, then generate a polished PRD saved to `./dev_docs/`.

---

## Workflow Overview

1. **Introduce** the process briefly
2. **Interview** the user — one topic at a time, in order
3. **Confirm** the gathered info with a summary
4. **Generate** the PRD in Markdown and save to `./dev_docs/PRD.md`

---

## Step 1 — Introduce

Open with something like:

> "Great, let's plan this out! I'll guide you through a series of questions covering your idea, scope, users, tech stack, team, and timeline. At the end, I'll generate a full PRD and save it to your project folder. **This process typically takes 10–30 minutes** depending on how much detail you want to go into — there's no rush, and you can always say 'skip' or 'not sure yet' for anything still fuzzy. Ready? Let's dive in!"

---

## Step 2 — Interactive Interview

Ask questions **one topic at a time**. Wait for the user's answer before moving to the next. Use follow-up questions if an answer is vague or incomplete. Be conversational — you're a thoughtful tech lead, not a form.

Work through these topics in order:

### 2.1 Project Overview
- What is the name of the project?
- Describe the project in one or two sentences. What problem does it solve?
- Who are the primary end users / customers?

### 2.2 Goals & Success Metrics
- What are the main goals of this project?
- How will you know if it's successful? (KPIs, metrics, user outcomes)

### 2.3 Scope
- What are the **core features** that must be in v1?
- What is explicitly **out of scope** for now?
- Are there any known constraints (budget, deadline, team size)?

### 2.4 User Stories / Key Flows
This section should feel like a **collaborative brainstorm**, not an interrogation. Your job is to be an active co-creator, not just a recorder.

- Start by asking the user to describe the most important thing a user can do in the app.
- Based on the project description and goals gathered so far, **proactively suggest user stories** the user may not have thought of. Frame them as: "Based on what you've told me, I'd expect users might also need to... does that sound right?"
- Use the format: _"As a [user type], I want to [action], so that [outcome]."_
- Push gently on edge cases: what happens when something goes wrong? What does an admin or power user need?
- Aim for 5–10 solid stories covering the core flows. Flag which ones feel like v1 must-haves vs. future nice-to-haves.
- Invite the user to add, reject, or modify any suggestion — this is a conversation, not a prescription.

### 2.5 Tech Stack
- Do you have a preferred frontend framework? (React, Vue, Next.js, etc.)
- What about the backend? (Node/Express, Django, FastAPI, Rails, etc.)
- Database preference? (PostgreSQL, MySQL, MongoDB, etc.)
- Any third-party services or APIs to integrate? (Auth, payments, email, etc.)
- Where will this be hosted / deployed? (Vercel, AWS, GCP, self-hosted, etc.)

### 2.6 Architecture & Non-Functional Requirements
- Any specific performance or scalability requirements?
- Security or compliance requirements? (GDPR, SOC2, auth method, etc.)
- Does this need to be mobile-responsive or have a mobile app counterpart?

### 2.7 Team & Roles
- Who is on the team? List roles (e.g. 1 frontend dev, 1 backend dev, 1 designer).
- Who is the project owner / decision-maker?
- Are there any external stakeholders or clients?

### 2.8 Timeline & Milestones
- Is there a target launch date or deadline?
- What are the key milestones? (e.g. MVP by X, beta by Y)

### 2.9 Open Questions & Risks
- What is the biggest unknown or risk right now?
- Anything else important I should know?

---

## Step 3 — Confirm

Before generating the PRD, summarize what you've gathered in a brief structured recap and ask:

> "Here's what I have so far — does this look right before I write up the PRD?"

Show the summary as a compact list grouped by section. If anything seems missing or contradictory, flag it and ask.

---

## Step 4 — Generate the PRD

Once confirmed, generate the PRD using the template in `references/prd-template.md`.

Save it to:
```
./dev_docs/PRD.md
```

Where `./` is the current working directory.

Create the directory if it doesn't exist:
```bash
mkdir -p ./dev_docs
```

After saving, tell the user:
> "Your PRD has been saved to `./dev_docs/PRD.md`. You can open it, share it with your team, or ask me to refine any section."

---

## Tips for a Great Interview

- **Be conversational.** Don't list all questions at once — ask one at a time.
- **Follow up** when answers are vague. "Can you say more about that?" goes a long way.
- **Make suggestions** if the user is unsure. E.g. "For a project like this, many teams go with PostgreSQL — does that sound right?"
- **Validate tech choices** for consistency. If they pick React + FastAPI, note that's a common combo. If something seems odd, gently flag it.
- **Respect "not sure yet"** — leave those sections as TBD in the PRD rather than blocking progress.
- **Keep energy up.** Planning can feel tedious. Be encouraging and make it feel like a collaborative design session.
