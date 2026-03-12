import { supabase } from '../../../integrations/supabase/client';
import type { CreateEventInput, EventListItem } from '../types';

export async function createEvent(input: CreateEventInput): Promise<void> {
  const { error } = await supabase.from('events').insert({
    organizer_id: input.organizerId,
    title: input.title,
    location: input.location,
    description: input.description,
    photo_urls: input.photoUrls,
    max_attendees: input.maxAttendees,
    starts_at: input.startsAt,
    ends_at: input.endsAt,
  });

  if (error) throw new Error(error.message);
}

export async function listUpcomingEvents(): Promise<EventListItem[]> {
  const { data, error } = await supabase
    .from('events')
    .select('id, title, location, starts_at, max_attendees')
    .gt('starts_at', new Date().toISOString())
    .order('starts_at', { ascending: true });

  if (error) throw new Error(error.message);

  return (data ?? []).map((event) => ({
    id: event.id as string,
    title: event.title as string,
    location: event.location as string,
    startsAt: event.starts_at as string,
    maxAttendees: event.max_attendees as number,
  }));
}
