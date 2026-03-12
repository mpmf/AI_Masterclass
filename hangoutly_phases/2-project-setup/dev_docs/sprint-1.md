# Sprint 1 Plan

**Project:** Hangoutly
**Sprint:** 1
**Duration:** 2 weeks
**Start Date:** TBD
**End Date:** TBD
**Status:** Planning

---

## Team Capacity

| Team Member | Role | Available Days | Points Budget |
|-------------|------|---------------|---------------|
| Solo founder/developer | Full-stack engineer | 10 | 12 |
| | | **Total** | **12** |

---

## Sprint Goal
Establish a reliable technical foundation for Hangoutly by implementing schema, security, frontend architecture, and baseline authentication. At sprint end, the project should be ready for rapid feature delivery in event management and discovery.

---

## Sprint Backlog

| ID | Story | Epic | Complexity | Points | Priority |
|----|-------|------|-----------|--------|----------|
| US-03 | Frontend architecture scaffold (vertical slices + atomic design) | Platform Foundation & Data Model | M | 2 | Must-have |
| US-01 | Core Supabase schema setup | Platform Foundation & Data Model | L | 4 | Must-have |
| US-02 | RLS and access policy implementation | Platform Foundation & Data Model | L | 4 | Must-have |
| US-04 | User signup and login | Authentication & User Session | M | 2 | Must-have |

**Total Points:** 12 / 12

---

## Dependencies & Risks

| # | Description | Impact | Mitigation |
|---|-------------|--------|------------|
| 1 | RLS policy complexity could delay downstream feature work. | High | Keep policy surface minimal and validate with targeted test cases early. |
| 2 | Data model changes later may force rework in multiple slices. | Medium | Review schema against all v1 stories before implementation freeze. |
| 3 | Solo capacity may be affected by unknown integration friction. | Medium | Strictly timebox setup tasks and defer non-blocking polish to Sprint 2. |

---

## Out of Sprint (Next Up)
Stories that are prioritized but did not fit this sprint:

- US-04 — User signup and login (M)
- US-05 — Protected action redirect for RSVP (S)
- US-06 — Create and publish event (L)
- US-09 — Browse upcoming events (M)
- US-12 — RSVP to event (M)

---

## Notes
- Priority sequence agreed: Foundation -> Auth -> Event Management -> Discovery -> RSVP -> Feedback.
- Sprint assumes one full-time contributor over a 2-week window.
- Product risk focus remains differentiation through simple flows and strong UI/UX execution.
