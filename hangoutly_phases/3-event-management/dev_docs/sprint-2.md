# Sprint 2 Plan

**Project:** Hangoutly
**Sprint:** 2
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
Ship the first end-to-end event supply and discovery slice by enabling organizers to create and manage events before start time, and by exposing upcoming events for browsing. At sprint end, users should be able to discover real published events and organizers should have core event control.

---

## Sprint Backlog

| ID | Story | Epic | Complexity | Points | Priority |
|----|-------|------|-----------|--------|----------|
| US-05 | Protected action redirect for RSVP | Authentication & User Session | S | 1 | Must-have |
| US-06 | Create and publish event | Event Management (Organizer) | L | 4 | Must-have |
| US-07 | Edit event before start | Event Management (Organizer) | M | 2 | Must-have |
| US-08 | Delete event before start | Event Management (Organizer) | M | 2 | Must-have |
| US-09 | Browse upcoming events | Event Discovery & Event Details | M | 2 | Must-have |

**Total Points:** 11 / 12

---

## Dependencies & Risks

| # | Description | Impact | Mitigation |
|---|-------------|--------|------------|
| 1 | US-07, US-08, and US-09 all depend on a stable US-06 create/publish flow. | High | Implement and validate event creation first, then parallelize read and management UI work. |
| 2 | Time-based edit/delete constraints can drift between UI checks and backend policy behavior. | High | Enforce constraints in Supabase policies and mirror with clear UI messaging and tests. |
| 3 | Event list quality depends on clean date filtering and capacity metadata. | Medium | Define one canonical query for upcoming events and reuse across listing and cards. |

---

## Out of Sprint (Next Up)
Stories that are prioritized but did not fit this sprint:

- US-10 — Filter events by location (M)
- US-11 — Event details page (M)
- US-12 — RSVP to event (M)
- US-14 — Capacity enforcement (L)

---

## Notes
- Priority sequence remains: Foundation -> Auth -> Event Management -> Discovery -> RSVP -> Feedback.
- Sprint includes a 1-point buffer for integration and policy edge cases.
- Feedback epic work (US-15+) remains intentionally deferred until RSVP flow is stable.
- Implementation breakdown by file/module is documented in `dev_docs/sprint-2-implementation-checklist.md`.
