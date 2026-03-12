# Epic: Event Discovery & Event Details

**Project:** Hangoutly
**Epic ID:** EP-04
**Status:** Backlog
**Priority:** High

## Summary
Deliver the discovery experience for upcoming events and detail pages that support RSVP decisions. This epic is key to user activation and RSVP conversion.

---

## User Stories

### US-09 — Browse Upcoming Events
**Story:** As a visitor, I want to browse future events, so that I can discover relevant activities.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-06

**Acceptance Criteria:**
- [ ] Only upcoming events are shown in the listing.
- [ ] Event cards include key metadata (title, location, date, capacity state).
- [ ] Empty and loading states are implemented.

---

### US-10 — Filter Events by Location
**Story:** As a visitor, I want to filter events by location, so that I can find nearby options quickly.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-09

**Acceptance Criteria:**
- [ ] Location filter updates results correctly.
- [ ] Users can clear/reset active filter state.
- [ ] Filter behavior works for anonymous and authenticated users.

---

### US-11 — Event Details Page
**Story:** As a visitor, I want to view a full event page, so that I can decide whether to RSVP.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-09

**Acceptance Criteria:**
- [ ] Event page shows title, location, description, photos, date/time, and capacity.
- [ ] RSVP CTA and current RSVP state are clearly presented.
- [ ] Invalid or missing event IDs show a clear not-found state.

---

## Notes
This epic should emphasize a simple, polished flow to support product differentiation goals.
