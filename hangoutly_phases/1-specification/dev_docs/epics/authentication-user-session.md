# Epic: Authentication & User Session

**Project:** Hangoutly
**Epic ID:** EP-02
**Status:** Backlog
**Priority:** High

## Summary
Implement account registration, login, and protected action handling using Supabase Auth. This epic ensures RSVP and organizer flows respect authentication rules.

---

## User Stories

### US-04 — User Signup and Login
**Story:** As a visitor, I want to sign up and log in, so that I can RSVP and create events.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-03

**Acceptance Criteria:**
- [ ] Users can create an account with email/password.
- [ ] Users can log in and log out successfully.
- [ ] Session persists correctly across refresh/navigation.

---

### US-05 — Protected Action Redirect
**Story:** As a visitor, I want to be redirected to login when attempting RSVP while logged out, so that I understand the requirement and can continue my intent.

**Complexity:** S
**Priority:** Must-have
**Depends on:** US-04

**Acceptance Criteria:**
- [ ] RSVP action is visible but protected for anonymous users.
- [ ] Attempting RSVP while unauthenticated routes user to auth.
- [ ] After login, user is returned to the original event context.

---

## Notes
Focus on the minimum stable auth flow needed to unlock event and RSVP stories.
