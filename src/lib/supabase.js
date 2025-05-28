import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ovsqhwjqsmpgmitkdlel.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92c3Fod2pxc21wZ21pdGtkbGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MTc4NjksImV4cCI6MjA2Mzk5Mzg2OX0.RI_9ea6bXWwnvYe2NZTO9eAgmIrYmYughzp5ZYcFe3E'

// ✅ this must be exported
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
