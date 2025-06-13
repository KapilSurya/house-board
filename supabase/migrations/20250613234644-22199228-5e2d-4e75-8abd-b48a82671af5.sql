
-- Create a table for user feedback
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  feedback_text TEXT NOT NULL,
  contact_info TEXT,
  contact_type TEXT CHECK (contact_type IN ('email', 'phone')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS) for the feedback table
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert feedback (since it's public feedback)
CREATE POLICY "Anyone can submit feedback" 
  ON public.feedback 
  FOR INSERT 
  WITH CHECK (true);
