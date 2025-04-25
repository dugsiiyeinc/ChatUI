/// FILE: src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY= import.meta.env.VITE_SUPABASE_ANON_KEY


const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase