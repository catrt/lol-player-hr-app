import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jdfuwchjnxnijctymwhm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnV3Y2hqbnhuaWpjdHltd2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTQ0ODgsImV4cCI6MjAyNjU5MDQ4OH0.CB77LQV9D9DAIm0jSVRa9ogGaQNwGrTiBlEPvCDQuTM";

export default createClient(supabaseUrl!, supabaseKey!);