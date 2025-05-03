import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lcoenswuikguecsmyzsz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjb2Vuc3d1aWtndWVjc215enN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NjQ1NTgsImV4cCI6MjA2MTE0MDU1OH0.ll0GgejBMFzA_Iq_2x9Lsk7DfLxx-UUPtFyZ7J_1Wr0'

// ✅ this must be exported
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
