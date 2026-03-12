# PRD Template

Use this template to generate the final PRD. Fill in all sections based on the interview. Replace placeholder text (in angle brackets) with real content. For sections that are TBD, write `_TBD — to be defined_` rather than leaving them blank.

---

# Product Requirements Document
## {{Project Name}}

**Version:** 1.0
**Date:** {{today's date}}
**Status:** Draft

---

## 1. Overview

### 1.1 Project Summary
{{1–2 sentence description of what the project is and what problem it solves.}}

### 1.2 Background & Motivation
{{Why is this being built? What gap or opportunity does it address?}}

### 1.3 Goals
{{Bulleted list of the primary goals of this project.}}

### 1.4 Success Metrics
{{How will success be measured? KPIs, conversion rates, uptime targets, user counts, etc.}}

---

## 2. Stakeholders & Users

### 2.1 Team & Roles
| Role | Name / Resource | Responsibility |
|------|----------------|----------------|
| Project Owner | {{name}} | Final decisions, sign-off |
| {{Role}} | {{name or TBD}} | {{responsibility}} |

### 2.2 Target Users
{{Describe the primary and secondary end users. Include any relevant segments, personas, or user types.}}

### 2.3 External Stakeholders
{{Clients, partners, or other parties with a stake in the outcome. Leave blank if none.}}

---

## 3. Scope

### 3.1 In Scope (v1)
{{Bulleted list of features and capabilities included in the first release.}}

### 3.2 Out of Scope
{{Explicit list of things that will NOT be built in v1. This is important for managing expectations.}}

### 3.3 Known Constraints
{{Budget, team size, deadline, technical limitations, or other constraints.}}

---

## 4. User Stories & Key Flows

### 4.1 Core User Journey
{{Step-by-step description of the primary user flow, from entry point to value delivery.}}

**Example:**
1. User lands on the homepage
2. User signs up / logs in
3. ...

### 4.2 Additional Flows
{{Any other important use cases or flows. Use sub-sections if needed.}}

---

## 5. Functional Requirements

{{Group requirements by feature area. Use "MUST", "SHOULD", "COULD" (MoSCoW) to indicate priority.}}

### 5.1 {{Feature Area 1}}
- **MUST** — {{requirement}}
- **SHOULD** — {{requirement}}
- **COULD** — {{requirement}}

### 5.2 {{Feature Area 2}}
- **MUST** — {{requirement}}

_(Add more sections as needed.)_

---

## 6. Non-Functional Requirements

### 6.1 Performance
{{Expected load, response times, concurrency targets, etc.}}

### 6.2 Security & Compliance
{{Auth method, data privacy requirements, compliance frameworks (GDPR, SOC2, etc.), sensitive data handling.}}

### 6.3 Scalability
{{Expected growth, scaling strategy, traffic spikes.}}

### 6.4 Availability & Reliability
{{Uptime target, disaster recovery, backup strategy.}}

### 6.5 Accessibility & Responsiveness
{{WCAG compliance, mobile-responsiveness, browser support.}}

---

## 7. Technical Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | {{e.g. Next.js / React}} | {{notes}} |
| Backend | {{e.g. FastAPI / Node.js}} | {{notes}} |
| Database | {{e.g. PostgreSQL}} | {{notes}} |
| Auth | {{e.g. Auth0 / JWT}} | {{notes}} |
| Hosting | {{e.g. AWS / Vercel}} | {{notes}} |
| CI/CD | {{e.g. GitHub Actions}} | {{notes}} |
| Third-party APIs | {{e.g. Stripe, SendGrid}} | {{notes}} |

---

## 8. Architecture Overview

{{High-level description of the system architecture. Describe how the frontend, backend, database, and external services interact. A simple diagram description (in text or Mermaid) is encouraged.}}

```
[Client / Browser]
      |
      v
[Frontend — Next.js on Vercel]
      |
      v (REST / GraphQL)
[Backend API — FastAPI on AWS]
      |
      v
[Database — PostgreSQL on RDS]
```

---

## 9. Milestones & Timeline

| Milestone | Description | Target Date |
|-----------|-------------|-------------|
| Kickoff | Team aligned, environments set up | {{date}} |
| MVP | Core features working end-to-end | {{date}} |
| Beta | Tested with real users, bugs fixed | {{date}} |
| Launch | Public release | {{date}} |

---

## 10. Open Questions & Risks

| # | Question / Risk | Owner | Status |
|---|----------------|-------|--------|
| 1 | {{risk or open question}} | {{person}} | Open |

---

## 11. Appendix

{{Any additional context, links to designs, research, competitor analysis, or reference material.}}
