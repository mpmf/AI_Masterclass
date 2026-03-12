import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/atoms/Button';
import { useAuth } from '../../auth/services/useAuth';
import * as eventService from '../../events/services/eventService';
import type { EventListItem } from '../../events/types';

export function HomePage() {
  const { user, isLoading } = useAuth();
  const displayName = (user?.user_metadata?.full_name as string | undefined)?.trim() || user?.email;
  const [events, setEvents] = useState<EventListItem[]>([]);
  const [isEventsLoading, setIsEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadEvents() {
      setIsEventsLoading(true);
      setEventsError(null);
      try {
        const upcomingEvents = await eventService.listUpcomingEvents();
        if (isMounted) setEvents(upcomingEvents);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Could not load upcoming events.';
        if (isMounted) setEventsError(message);
      } finally {
        if (isMounted) setIsEventsLoading(false);
      }
    }

    void loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card stack">
      <h1 style={{ margin: 0 }}>Upcoming events</h1>
      <p style={{ margin: 0 }}>
        Discover newly published Hangoutly events and create your own.
      </p>
      {isLoading ? <p style={{ margin: 0 }}>Loading session...</p> : null}
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <p style={{ margin: 0 }}>You are signed in as {displayName}.</p>
          <Link to="/events/new">
            <Button>Create event</Button>
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary">Sign up</Button>
          </Link>
        </div>
      )}
      {isEventsLoading ? <p style={{ margin: 0 }}>Loading upcoming events...</p> : null}
      {eventsError ? <p style={{ margin: 0, color: '#dc2626' }}>{eventsError}</p> : null}
      {!isEventsLoading && !eventsError && events.length === 0 ? (
        <p style={{ margin: 0 }}>No upcoming events yet. Be the first to publish one.</p>
      ) : null}
      {!isEventsLoading && !eventsError && events.length > 0 ? (
        <div className="stack">
          {events.map((event) => (
            <article
              key={event.id}
              style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: '0.9rem 1rem' }}
            >
              <h2 style={{ margin: 0, fontSize: 18 }}>{event.title}</h2>
              <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>
                {event.location} - {new Date(event.startsAt).toLocaleString()}
              </p>
              <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>
                Max attendees: {event.maxAttendees}
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
