# Epic: RSVP & Capacity

**Project:** Hangoutly
**Epic ID:** EP-05
**Status:** Backlog
**Priority:** High

## Summary
Implement the core RSVP journey with reliable capacity handling and attendee self-management. This epic maps directly to Hangoutly's primary user value.

---

## User Stories

### US-12 — RSVP to Event
**Story:** As an authenticated user, I want to RSVP to a future event, so that I can reserve a spot.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-05, US-11

**Acceptance Criteria:**
- [ ] Users can create one RSVP per event.
- [ ] RSVP success state is confirmed in the UI.
- [ ] RSVP is blocked for past events.

---

### US-13 — Edit/Cancel RSVP
**Story:** As an attendee, I want to edit or cancel my RSVP, so that I can adjust my attendance plans.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-12

**Acceptance Criteria:**
- [ ] Attendee can update or cancel RSVP from the event context.
- [ ] UI reflects RSVP status changes immediately after success.
- [ ] Canceled RSVPs free capacity for other users.

---

### US-14 — Capacity Enforcement
**Story:** As a system, I want to enforce max attendee limits, so that events never exceed organizer-defined capacity.

**Complexity:** L
**Priority:** Must-have
**Depends on:** US-01, US-12

**Acceptance Criteria:**
- [ ] RSVPs are rejected when event capacity is reached.
- [ ] Concurrency-safe checks prevent overbooking.
- [ ] Capacity status is visible to users before RSVP submission.

---

## Notes
Capacity logic must be enforced server-side; UI checks are helpful but not sufficient.
