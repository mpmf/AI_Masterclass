# Hangoutly - Sprint 1 Implementation Bootstrap

This workspace now includes the first implementation slice for Sprint 1:

- React + TypeScript frontend scaffold (vertical slices + Atomic Design)
- Supabase client integration and auth session provider
- Signup/login/logout flow
- Protected route pattern for RSVP-like actions
- SQL migrations for core schema and RLS policies

## Prerequisites

- Node.js 20+
- A Supabase project

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env
   ```
3. Fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`.
4. Run dev server:
   ```bash
   npm run dev
   ```

## Apply database migrations

Run SQL files in order in Supabase SQL editor:

1. `supabase/migrations/001_core_schema.sql`
2. `supabase/migrations/002_rls_policies.sql`
3. `supabase/migrations/003_profile_full_name_from_metadata.sql`

## Current sprint mapping

- US-03: Frontend architecture scaffold ✅
- US-01: Core schema setup ✅
- US-02: RLS/access policies ✅
- US-04: Signup/login baseline ✅
