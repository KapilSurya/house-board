
-- Create love letters table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.love_letters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_email TEXT NOT NULL,
  partner_email TEXT NOT NULL,
  message TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  delivered BOOLEAN DEFAULT false,
  error TEXT
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS love_letters_sender_email_idx ON public.love_letters(sender_email);
CREATE INDEX IF NOT EXISTS love_letters_partner_email_idx ON public.love_letters(partner_email);

-- Add comment for documentation
COMMENT ON TABLE public.love_letters IS 'Stores love letters sent by users to their partners';
