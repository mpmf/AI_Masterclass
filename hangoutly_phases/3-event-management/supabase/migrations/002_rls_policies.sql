-- Row-level security for Hangoutly MVP
alter table public.profiles enable row level security;
alter table public.events enable row level security;
alter table public.rsvps enable row level security;
alter table public.questionnaires enable row level security;
alter table public.questions enable row level security;
alter table public.responses enable row level security;

-- Profiles
create policy "profiles are viewable by everyone"
on public.profiles for select
using (true);

create policy "users can update their own profile"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

-- Events
create policy "future events are viewable by everyone"
on public.events for select
using (starts_at > now());

create policy "authenticated users can create events"
on public.events for insert
to authenticated
with check (auth.uid() = organizer_id);

create policy "organizers can update before start"
on public.events for update
to authenticated
using (auth.uid() = organizer_id and now() < starts_at)
with check (auth.uid() = organizer_id and now() < starts_at);

create policy "organizers can delete before start"
on public.events for delete
to authenticated
using (auth.uid() = organizer_id and now() < starts_at);

-- RSVPs
create policy "users can view rsvps for events"
on public.rsvps for select
to authenticated
using (true);

create policy "attendees can create own rsvp"
on public.rsvps for insert
to authenticated
with check (auth.uid() = attendee_id);

create policy "attendees can update own rsvp"
on public.rsvps for update
to authenticated
using (auth.uid() = attendee_id)
with check (auth.uid() = attendee_id);

create policy "attendees can delete own rsvp"
on public.rsvps for delete
to authenticated
using (auth.uid() = attendee_id);

-- Questionnaires
create policy "questionnaires viewable by everyone"
on public.questionnaires for select
using (true);

create policy "organizers manage own questionnaires"
on public.questionnaires for all
to authenticated
using (auth.uid() = organizer_id)
with check (auth.uid() = organizer_id);

-- Questions
create policy "questions viewable by everyone"
on public.questions for select
using (true);

create policy "organizers manage questions via questionnaire ownership"
on public.questions for all
to authenticated
using (
  exists (
    select 1
    from public.questionnaires q
    where q.id = questionnaire_id
      and q.organizer_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.questionnaires q
    where q.id = questionnaire_id
      and q.organizer_id = auth.uid()
  )
);

-- Responses
create policy "organizers can read responses for their events"
on public.responses for select
to authenticated
using (
  exists (
    select 1
    from public.questionnaires q
    where q.id = questionnaire_id
      and q.organizer_id = auth.uid()
  )
  or attendee_id = auth.uid()
);

create policy "attendees can submit own responses"
on public.responses for insert
to authenticated
with check (
  attendee_id = auth.uid()
  and exists (
    select 1
    from public.rsvps r
    join public.questionnaires q on q.event_id = r.event_id
    where q.id = questionnaire_id
      and r.attendee_id = auth.uid()
      and r.status in ('going', 'maybe')
  )
);

create policy "attendees can update own responses"
on public.responses for update
to authenticated
using (attendee_id = auth.uid())
with check (attendee_id = auth.uid());

create policy "attendees can delete own responses"
on public.responses for delete
to authenticated
using (attendee_id = auth.uid());
