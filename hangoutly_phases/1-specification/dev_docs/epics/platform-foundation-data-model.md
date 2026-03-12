# Epic: Platform Foundation & Data Model

**Project:** Hangoutly
**Epic ID:** EP-01
**Status:** Backlog
**Priority:** High

## Summary
Define the foundational Supabase schema, security rules, and frontend architecture scaffold needed for all MVP features. This epic de-risks delivery by establishing strong data and permission boundaries first.

---

## User Stories

### US-01 — Core Schema Setup
**Story:** As a developer, I want the core Supabase schema for users, events, RSVPs, questionnaires, questions, and responses, so that all v1 flows run on a consistent data model.

**Complexity:** L
**Priority:** Must-have
**Depends on:** None

**Acceptance Criteria:**
- [ ] Required tables and relationships are created in Supabase Postgres.
- [ ] Event capacity, ownership, and scheduling fields are included.
- [ ] Basic migration notes and seed data are documented for local/dev setup.

---

### US-02 — RLS & Access Policies
**Story:** As a developer, I want row-level security policies for organizer and attendee actions, so that access rules are enforced by default.

**Complexity:** L
**Priority:** Must-have
**Depends on:** US-01

**Acceptance Criteria:**
- [ ] Only event organizers can edit/delete their own events.
- [ ] Only authenticated users can create/update/cancel their own RSVPs.
- [ ] Only authorized users can create questionnaires, submit responses, and view summaries per ownership rules.

---

### US-03 — Frontend Architecture Scaffold
**Story:** As a developer, I want a vertical-slice project structure and Atomic Design scaffold, so that feature work is organized and reusable.

**Complexity:** M
**Priority:** Must-have
**Depends on:** None

**Acceptance Criteria:**
- [ ] Feature directories follow vertical-slice conventions.
- [ ] Atomic layers (atoms, molecules, organisms) are scaffolded.
- [ ] Base app shell and routing structure are in place.

---

## Notes
This epic is a hard dependency for all product features. Keep schema and policies minimal but extensible to preserve delivery speed for a solo build.
