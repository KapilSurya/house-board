
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

-- Create function to delete delivered messages after 24 hours
CREATE OR REPLACE FUNCTION delete_delivered_love_letters() RETURNS TRIGGER AS $$
BEGIN
  -- Delete the record immediately after setting delivered=true
  IF NEW.delivered = true THEN
    DELETE FROM public.love_letters WHERE id = NEW.id;
    RETURN NULL; -- Row is deleted, so return NULL
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-delete delivered messages
DROP TRIGGER IF EXISTS trigger_delete_delivered_love_letters ON public.love_letters;
CREATE TRIGGER trigger_delete_delivered_love_letters
AFTER UPDATE ON public.love_letters
FOR EACH ROW
EXECUTE FUNCTION delete_delivered_love_letters();
