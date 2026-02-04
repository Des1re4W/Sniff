import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nlotztompilcdkyfjmla.supabase.co";
const supabaseKey = "sb_publishable_ju61_QrCEWr3EaRxZ-y3RQ_LVWRUbCY";

export const supabase = createClient(supabaseUrl, supabaseKey);
