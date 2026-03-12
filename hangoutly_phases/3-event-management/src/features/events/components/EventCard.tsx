import type { EventListItem } from '../types';

type EventCardProps = {
  event: EventListItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: 10,
        padding: '0.9rem 1rem',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <h2 style={{ margin: 0, fontSize: 18 }}>{event.title}</h2>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#0f766e',
            background: '#e6fffa',
            border: '1px solid #99f6e4',
            borderRadius: 999,
            padding: '0.15rem 0.55rem',
          }}
        >
          Open
        </span>
      </div>
      <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>{event.location}</p>
      <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>
        {new Date(event.startsAt).toLocaleString()}
      </p>
      <p style={{ margin: '0.35rem 0 0', color: '#475569' }}>Capacity: up to {event.maxAttendees}</p>
    </article>
  );
}
