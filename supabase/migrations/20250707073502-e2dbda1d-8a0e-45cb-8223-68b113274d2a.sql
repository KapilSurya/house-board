
-- Create a table for account deletion requests
CREATE TABLE public.account_deletion_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  reason TEXT,
  requested_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'completed')),
  processed_at TIMESTAMP WITH TIME ZONE
);

-- Add Row Level Security (RLS)
ALTER TABLE public.account_deletion_requests ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to submit deletion requests
CREATE POLICY "Anyone can submit deletion requests" 
  ON public.account_deletion_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows service role to read/update requests (for admin processing)
CREATE POLICY "Service role can manage deletion requests" 
  ON public.account_deletion_requests 
  FOR ALL 
  USING (auth.role() = 'service_role');
