# Epic: Feedback Questionnaires & Summaries

**Project:** Hangoutly
**Epic ID:** EP-06
**Status:** Backlog
**Priority:** Medium

## Summary
Provide a lightweight post-event feedback loop so organizers can capture attendee sentiment and review summary insights.

---

## User Stories

### US-15 — Create Feedback Questionnaire
**Story:** As an organizer, I want to create a post-event questionnaire, so that I can gather attendee feedback.

**Complexity:** L
**Priority:** Must-have
**Depends on:** US-06

**Acceptance Criteria:**
- [ ] Organizer can create and edit questionnaire questions tied to an event.
- [ ] Questionnaire requires at least one valid question before publish.
- [ ] Only event organizers can manage their questionnaire.

---

### US-16 — Submit Feedback Response
**Story:** As an attendee, I want to submit questionnaire responses, so that I can share my event experience.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-15, US-12

**Acceptance Criteria:**
- [ ] Eligible attendees can submit responses to event questionnaires.
- [ ] Required questions are validated before submit.
- [ ] Response submission rules are enforced (one response per attendee by default).

---

### US-17 — View Feedback Summaries
**Story:** As an organizer, I want to view response summaries, so that I can improve future events.

**Complexity:** M
**Priority:** Must-have
**Depends on:** US-16

**Acceptance Criteria:**
- [ ] Organizer can view aggregate summaries per question.
- [ ] Text responses are displayed where applicable.
- [ ] Access is restricted to the owning organizer.

---

## Notes
Start with simple question types and summary outputs to avoid overengineering in MVP.
