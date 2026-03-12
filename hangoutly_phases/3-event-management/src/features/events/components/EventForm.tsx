import { FormEvent, useState } from 'react';
import { Button } from '../../../components/atoms/Button';
import { Input } from '../../../components/atoms/Input';
import type { EventFormInput } from '../types';

type EventFormProps = {
  title: string;
  submitLabel: string;
  onSubmit: (values: EventFormInput) => Promise<void>;
};

export function EventForm({ title, submitLabel, onSubmit }: EventFormProps) {
  const [eventTitle, setEventTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [maxAttendees, setMaxAttendees] = useState('20');
  const [startsAt, setStartsAt] = useState('');
  const [endsAt, setEndsAt] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    const parsedMaxAttendees = Number(maxAttendees);
    const parsedStartsAt = startsAt ? new Date(startsAt) : null;
    const parsedEndsAt = endsAt ? new Date(endsAt) : null;

    if (!eventTitle.trim() || !location.trim() || !description.trim()) {
      setError('Title, location, and description are required.');
      return;
    }

    if (!Number.isInteger(parsedMaxAttendees) || parsedMaxAttendees <= 0) {
      setError('Max attendees must be a whole number greater than 0.');
      return;
    }

    if (photoFiles.length === 0) {
      setError('At least one event photo is required.');
      return;
    }

    if (!photoFiles.every((file) => file.type.startsWith('image/'))) {
      setError('Only image files are allowed.');
      return;
    }

    if (!parsedStartsAt || !parsedEndsAt || Number.isNaN(parsedStartsAt.getTime()) || Number.isNaN(parsedEndsAt.getTime())) {
      setError('Start and end date/time are required.');
      return;
    }

    if (parsedEndsAt <= parsedStartsAt) {
      setError('End date/time must be later than start date/time.');
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit({
        title: eventTitle.trim(),
        location: location.trim(),
        description: description.trim(),
        photoFiles,
        maxAttendees: parsedMaxAttendees,
        startsAt: parsedStartsAt.toISOString(),
        endsAt: parsedEndsAt.toISOString(),
      });
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : 'Could not publish event.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="card" style={{ maxWidth: 640, margin: '1rem auto' }}>
      <form className="stack" onSubmit={handleSubmit}>
        <h1 style={{ margin: 0 }}>{title}</h1>
        <Input
          id="event-title"
          type="text"
          label="Title"
          required
          value={eventTitle}
          onChange={(event) => setEventTitle(event.target.value)}
        />
        <Input
          id="event-location"
          type="text"
          label="Location"
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <label className="stack" htmlFor="event-description">
          <span style={{ fontSize: 14, fontWeight: 600 }}>Description</span>
          <textarea
            id="event-description"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: 8,
              padding: '0.65rem 0.75rem',
              fontSize: 14,
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        </label>
        <label className="stack" htmlFor="event-photos">
          <span style={{ fontSize: 14, fontWeight: 600 }}>Event photos</span>
          <input
            id="event-photos"
            type="file"
            accept="image/*"
            multiple
            required
            onChange={(event) => {
              const nextFiles = Array.from(event.target.files ?? []);
              setPhotoFiles(nextFiles);
            }}
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: 8,
              padding: '0.65rem 0.75rem',
              fontSize: 14,
              background: '#ffffff',
            }}
          />
          <small style={{ color: '#475569' }}>
            Upload one or more images. These are stored in Supabase Storage.
          </small>
          {photoFiles.length > 0 ? (
            <small style={{ color: '#334155' }}>{photoFiles.length} file(s) selected</small>
          ) : null}
        </label>
        <Input
          id="event-max-attendees"
          type="number"
          label="Max attendees"
          min={1}
          step={1}
          required
          value={maxAttendees}
          onChange={(event) => setMaxAttendees(event.target.value)}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <Input
            id="event-starts-at"
            type="datetime-local"
            label="Starts at"
            required
            value={startsAt}
            onChange={(event) => setStartsAt(event.target.value)}
          />
          <Input
            id="event-ends-at"
            type="datetime-local"
            label="Ends at"
            required
            value={endsAt}
            onChange={(event) => setEndsAt(event.target.value)}
          />
        </div>
        {error ? <p style={{ color: '#dc2626', margin: 0 }}>{error}</p> : null}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Publishing...' : submitLabel}
        </Button>
      </form>
    </section>
  );
}
