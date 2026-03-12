import { supabase } from '../../../integrations/supabase/client';

const EVENT_PHOTOS_BUCKET = 'event-photos';

function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
}

export async function uploadEventPhotos(files: File[], organizerId: string): Promise<string[]> {
  const uploadedUrls = await Promise.all(
    files.map(async (file) => {
      const safeName = sanitizeFileName(file.name);
      const path = `${organizerId}/${crypto.randomUUID()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from(EVENT_PHOTOS_BUCKET)
        .upload(path, file, { upsert: false });

      if (uploadError) throw new Error(uploadError.message);

      const {
        data: { publicUrl },
      } = supabase.storage.from(EVENT_PHOTOS_BUCKET).getPublicUrl(path);

      return publicUrl;
    }),
  );

  return uploadedUrls;
}
