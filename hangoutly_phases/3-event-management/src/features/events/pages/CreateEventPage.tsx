import { useNavigate } from 'react-router-dom';
import { EventForm } from '../components/EventForm';
import * as eventService from '../services/eventService';
import { useAuth } from '../../auth/services/useAuth';
import type { EventFormInput } from '../types';
import { uploadEventPhotos } from '../services/photoStorageService';

export function CreateEventPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  async function handleCreateEvent(values: EventFormInput) {
    if (!user) throw new Error('You need to be logged in to create an event.');

    const photoUrls = await uploadEventPhotos(values.photoFiles, user.id);

    await eventService.createEvent({
      ...values,
      photoUrls,
      organizerId: user.id,
    });
    navigate('/');
  }

  return <EventForm title="Create event" submitLabel="Publish event" onSubmit={handleCreateEvent} />;
}
