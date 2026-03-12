# Sprint 2 Implementation Checklist

**Project:** Hangoutly
**Sprint:** 2
**Related Plan:** `dev_docs/sprint-2.md`

---

## Objective
Deliver an end-to-end event supply and discovery slice covering US-05, US-06, US-07, US-08, and US-09.

---

## Story-by-Story Checklist

## US-05 - Protected action redirect for RSVP
**Goal:** Unauthenticated users are redirected to login and returned to original event context.

- [ ] Replace `/rsvp-demo` context with real event route context support.
- [ ] Ensure `state.from` preserves pathname + query string during redirect.
- [ ] Ensure login redirect supports return to event details (future route shape like `/events/:eventId`).
- [ ] Add unauthenticated CTA from listing/details to trigger protected flow.

**Primary files**
- `src/app/RequireAuth.tsx`
- `src/features/auth/pages/LoginPage.tsx`
- `src/app/AppRouter.tsx`

---

## US-06 - Create and publish event
**Goal:** Organizer can create and publish event with validated required fields.

- [ ] Add event create page route (for example `/events/new`).
- [ ] Build event form with required fields: title, location, description, photos, max attendees, starts/ends.
- [ ] Add client-side validation (required fields, max attendees > 0, ends_at > starts_at).
- [ ] Add event create service for Supabase insert.
- [ ] Confirm created events appear in upcoming listing query.

**Primary files**
- `src/app/AppRouter.tsx`
- `src/features/events/pages/CreateEventPage.tsx` (new)
- `src/features/events/components/EventForm.tsx` (new)
- `src/features/events/services/eventService.ts` (new)
- `src/components/organisms/AppHeader.tsx` (add navigation entry)

---

## US-07 - Edit event before start
**Goal:** Organizer can edit own event before start; blocked after start.

- [ ] Add event edit page route (for example `/events/:eventId/edit`).
- [ ] Reuse `EventForm` for edit mode with prefilled event data.
- [ ] Add update service + optimistic UI state updates.
- [ ] Add UI guard message for started events (read-only + blocked action text).
- [ ] Confirm backend enforcement aligns with UI behavior.

**Primary files**
- `src/app/AppRouter.tsx`
- `src/features/events/pages/EditEventPage.tsx` (new)
- `src/features/events/components/EventForm.tsx`
- `src/features/events/services/eventService.ts`
- `supabase/migrations/002_rls_policies.sql` (verify policy behavior; new migration only if changes needed)

---

## US-08 - Delete event before start
**Goal:** Organizer can delete own event before start, with confirmation.

- [ ] Add delete action in organizer event context (edit page or management card).
- [ ] Add explicit confirmation modal/step before delete.
- [ ] Add delete service call + success redirect back to listing.
- [ ] Show clear blocked message if event has already started.

**Primary files**
- `src/features/events/pages/EditEventPage.tsx`
- `src/features/events/components/DeleteEventAction.tsx` (new)
- `src/features/events/services/eventService.ts`
- `supabase/migrations/002_rls_policies.sql` (verify policy behavior; new migration only if changes needed)

---

## US-09 - Browse upcoming events
**Goal:** Visitors can browse future events with key metadata and robust loading/empty states.

- [ ] Add upcoming events query service (`starts_at > now()` and sorted ascending).
- [ ] Build event list page (can replace current placeholder home content).
- [ ] Build event card component showing title, location, starts_at, and capacity state.
- [ ] Add loading state skeleton or placeholder.
- [ ] Add empty state when no upcoming events exist.

**Primary files**
- `src/features/events/pages/EventsListPage.tsx` (new or merge into `HomePage`)
- `src/features/events/components/EventCard.tsx` (new)
- `src/features/events/services/eventService.ts`
- `src/features/home/pages/HomePage.tsx` (if repurposed)

---

## Cross-Cutting Tasks

## Data contracts and typing
- [ ] Add shared event model types for create/read/update payloads.
- [ ] Keep service return types explicit for TS safety.

**Primary files**
- `src/features/events/types.ts` (new)
- `src/features/events/services/eventService.ts`

## Routing and navigation coherence
- [ ] Ensure all new routes are registered in `AppRouter`.
- [ ] Add organizer navigation entry points in header/home.

**Primary files**
- `src/app/AppRouter.tsx`
- `src/components/organisms/AppHeader.tsx`
- `src/features/home/pages/HomePage.tsx`

## Supabase policy and schema follow-up
- [ ] Confirm existing RLS policies fully satisfy create/edit/delete scenarios.
- [ ] If policy adjustments are required, add a new migration (`004_*.sql`) instead of editing applied ones.

**Primary files**
- `supabase/migrations/002_rls_policies.sql`
- `supabase/migrations/004_event_management_policy_tuning.sql` (new, only if needed)

---

## Suggested Build Order (Low Risk)

1. US-06 create/publish event
2. US-09 browse upcoming events
3. US-07 edit before start
4. US-08 delete before start
5. US-05 protected redirect wiring for RSVP entry points

---

## Validation Checklist

- [ ] Type safety: `npm run typecheck`
- [ ] Production build: `npm run build`
- [ ] Manual flow: create event -> appears in list
- [ ] Manual flow: organizer edits before start -> success
- [ ] Manual flow: organizer tries edit/delete after start -> blocked with clear message
- [ ] Manual flow: logged-out user triggered from protected action -> login -> return to original context
