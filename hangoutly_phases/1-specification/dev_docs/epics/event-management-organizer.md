# Epic: Event Management (Organizer)

**Project:** Hangoutly
**Epic ID:** EP-03
**Status:** Backlog
**Priority:** High

## Summary
Enable organizers to create, update, and delete events with clear time-based constraints. This epic ensures there is event supply for discovery and RSVP journeys.

---

## User Stories

### US-06 — Create and Publish Event
**Story:** As an organizer, I want to create and publish an event with core details, so that attendees can discover and join it.

**Complexity:** L
**Priority:** Must-have
**Depends on:** US-01, US-04

**Acceptance Criteria:**
- [ ] Organizer can create event with title, location, max attendees, description, photos, and date fields.
- [ ] Required fields are validated before publish.
- [ ] Published event becomes visible in upcoming event listings.

---

### US-07 — Edit Event Before Start
**Story:** As an organizer, I want to edit my event before it starts, so that I can correct details.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-06

**Acceptance Criteria:**
- [ ] Only the organizer can edit their own events.
- [ ] Editing is blocked after the event start datetime.
- [ ] Clear UI message is shown when edit is blocked.

---

### US-08 — Delete Event Before Start
**Story:** As an organizer, I want to delete my event before it starts, so that I can remove canceled plans.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-06

**Acceptance Criteria:**
- [ ] Only the organizer can delete their own events.
- [ ] Deletion is blocked after the event start datetime.
- [ ] Deletion requires a confirmation step.

---

## Notes
Event edit/delete constraints should be enforced in both UI and backend policies.
