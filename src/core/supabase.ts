import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const supabase = createClient(supabaseUrl, supabaseKey);

export function getPlayerImageUrl(path: string) {
  const { data } = supabase.storage
                     .from('HR-profile-image')
                     .getPublicUrl(path);

  return data.publicUrl;
}

export async function uploadPlayerImage(path: string, file: File) {
  try {
    const { data, error } = await supabase.storage
                              .from("HR-profile-image")
                              .upload(path, file, {
                                cacheControl: '3600',
                                upsert: false
                              })

    if(error) throw(error)
    return data
  } catch (error) {
    console.error("Error uploading file!")
    console.error(error)
    return false
  }
}
