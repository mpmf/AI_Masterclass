type EventFields = {
  title: string;
  location: string;
  description: string;
  maxAttendees: number;
  startsAt: string;
  endsAt: string;
};

export type EventFormInput = EventFields & {
  photoFiles: File[];
};

export type CreateEventInput = EventFields & {
  photoUrls: string[];
  organizerId: string;
};

export type EventListItem = {
  id: string;
  title: string;
  location: string;
  startsAt: string;
  maxAttendees: number;
};
