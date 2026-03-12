-- Storage bucket and policies for event photo uploads
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'event-photos',
  'event-photos',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "event photos are publicly readable"
on storage.objects for select
using (bucket_id = 'event-photos');

create policy "authenticated users upload own event photos"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'event-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "users update own event photos"
on storage.objects for update
to authenticated
using (
  bucket_id = 'event-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'event-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "users delete own event photos"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'event-photos'
  and (storage.foldername(name))[1] = auth.uid()::text
);
