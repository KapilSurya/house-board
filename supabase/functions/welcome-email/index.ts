
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = 'https://yyijabeyffphcvjlrent.supabase.co';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method === 'POST') {
      const { email } = await req.json();
      
      if (!email || typeof email !== 'string') {
        return new Response(
          JSON.stringify({ error: 'Valid email is required' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Send welcome email using the email service
      const emailContent = {
        to: email,
        subject: "You're in 💌 Let's build something beautiful together",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #43B3AE;">Hey there,</h2>
          
          <p>Thank you so much for joining the waitlist for HiveIn. We're building something really special for couples who want more than just "better communication."</p>
          
          <p><strong>HiveIn is all about the little things that make love feel lighter.</strong><br>
          Like that simple check-in before bed.<br>
          Or the photo you meant to send but forgot.<br>
          The gentle nudge when things feel a little off.<br>
          And the habits that keep your bond strong, even on busy days.</p>
          
          <p>We're not just designing an app. We're creating a cozy space that feels like home — a place where you and your partner can stay emotionally close, build meaningful rituals, and grow together one small moment at a time.</p>
          
          <p>You'll be the first to get access when we go live.</p>
          
          <p>Until then, come hang out with us on <a href="https://www.instagram.com/hiveinapp/" style="color: #43B3AE; text-decoration: none;">Instagram</a> for behind-the-scenes updates, relationship tips, and little doses of warmth.</p>
          
          <p>We're so excited to see what you and your partner build together.</p>
          
          <p>With love,<br>
          Team HiveIn</p>
        </div>
        `,
      };
      
      // In a real implementation, you would use an email service like Resend, SendGrid, etc.
      console.log("Sending welcome email to:", email);
      console.log("Email content:", emailContent);
      
      // Mock successful email send for now
      // TODO: Integrate with actual email service
      
      return new Response(
        JSON.stringify({ success: true, message: "Welcome email will be sent" }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
