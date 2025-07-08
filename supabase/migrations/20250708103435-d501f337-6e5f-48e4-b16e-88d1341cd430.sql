
-- Create a table for early access requests
CREATE TABLE public.early_access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  requested_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'notified'))
);

-- Add Row Level Security (RLS)
ALTER TABLE public.early_access_requests ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to submit early access requests
CREATE POLICY "Anyone can submit early access requests" 
  ON public.early_access_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows service role to manage requests (for admin processing)
CREATE POLICY "Service role can manage early access requests" 
  ON public.early_access_requests 
  FOR ALL 
  USING (auth.role() = 'service_role');
