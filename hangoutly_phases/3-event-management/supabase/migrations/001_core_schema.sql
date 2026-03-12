-- Core schema for Hangoutly MVP
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  organizer_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  location text not null,
  description text not null,
  photo_urls text[] not null default '{}',
  max_attendees integer not null check (max_attendees > 0),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  attendee_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'going' check (status in ('going', 'maybe', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (event_id, attendee_id)
);

create table if not exists public.questionnaires (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null unique references public.events(id) on delete cascade,
  organizer_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  questionnaire_id uuid not null references public.questionnaires(id) on delete cascade,
  prompt text not null,
  question_type text not null check (question_type in ('text', 'rating', 'single_choice', 'multi_choice')),
  is_required boolean not null default true,
  sort_order integer not null default 0,
  options jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.responses (
  id uuid primary key default gen_random_uuid(),
  questionnaire_id uuid not null references public.questionnaires(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  attendee_id uuid not null references public.profiles(id) on delete cascade,
  answer_text text,
  answer_rating integer,
  answer_options jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (questionnaire_id, question_id, attendee_id)
);

create index if not exists events_starts_at_idx on public.events (starts_at);
create index if not exists events_location_idx on public.events (location);
create index if not exists rsvps_event_id_idx on public.rsvps (event_id);
create index if not exists responses_questionnaire_id_idx on public.responses (questionnaire_id);

-- Keep profile email in sync with auth.users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do update
    set email = excluded.email,
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
