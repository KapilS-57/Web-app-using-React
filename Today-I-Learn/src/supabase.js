
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ypswaxbagnuvdrxoeivl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwc3dheGJhZ251dmRyeG9laXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NDE4MTQsImV4cCI6MTk4NzAxNzgxNH0.I6uI3Oa65fsuJTATSzLF9CVgaaJ-xkHwEmRXJQuISr4";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;