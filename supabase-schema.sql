-- ==============================================================================
-- Supabase Schema for Mario's Portfolio Guestbook
-- ==============================================================================
-- Run this script in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new

-- 1. Create the guestbook table
CREATE TABLE IF NOT EXISTS public.guestbook (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    name VARCHAR(64) NOT NULL,
    note VARCHAR(140) DEFAULT '',
    stamp VARCHAR(16) NOT NULL DEFAULT '✳'
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policies
-- Allow anyone to read guestbook entries
DROP POLICY IF EXISTS "Allow public read access" ON public.guestbook;
CREATE POLICY "Allow public read access"
ON public.guestbook
FOR SELECT
TO public
USING (true);

-- Allow anyone to insert guestbook entries
DROP POLICY IF EXISTS "Allow public insert access" ON public.guestbook;
CREATE POLICY "Allow public insert access"
ON public.guestbook
FOR INSERT
TO public
WITH CHECK (
    char_length(name) > 0 AND
    char_length(name) <= 64 AND
    (note IS NULL OR char_length(note) <= 140)
);

-- 4. Enable Realtime updates (optional but enables instant wall updates)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
      AND schemaname = 'public' 
      AND tablename = 'guestbook'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.guestbook;
  END IF;
END $$;
