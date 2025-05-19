
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import { corsHeaders } from "../_shared/cors.ts";

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
      
      // Check if email already exists
      const { data: existingEmails } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .limit(1);
      
      if (existingEmails && existingEmails.length > 0) {
        return new Response(
          JSON.stringify({ success: true, message: 'You\'re already subscribed!' }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Insert email into database
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);
      
      if (error) throw error;
      
      // Send welcome email
      try {
        const welcomeResponse = await fetch(`${supabaseUrl}/functions/v1/welcome-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`,
            ...corsHeaders
          },
          body: JSON.stringify({ email })
        });
        
        if (!welcomeResponse.ok) {
          console.error('Failed to send welcome email:', await welcomeResponse.text());
        } else {
          console.log('Welcome email sent successfully');
        }
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
        // We don't want to fail the subscription if the email fails
      }
      
      return new Response(
        JSON.stringify({ success: true }),
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
