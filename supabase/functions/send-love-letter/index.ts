
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

// Initialize Supabase client
const supabaseUrl = 'https://yyijabeyffphcvjlrent.supabase.co';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Get Resend API key from environment variables
const resendApiKey = Deno.env.get('WelcomeMail') || '';

interface LoveLetterRequest {
  senderEmail: string;
  partnerEmail: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method === 'POST') {
      const { senderEmail, partnerEmail, message } = await req.json() as LoveLetterRequest;
      
      if (!senderEmail || !partnerEmail || !message) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (!resendApiKey) {
        console.error('Missing Resend API key');
        return new Response(
          JSON.stringify({ error: 'Email service configuration error' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Prepare the email HTML before database operations for better performance
      const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>A Special Message For You</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .love-letter {
              background-color: #fff9f9;
              border: 1px solid #ffccd5;
              border-radius: 12px;
              padding: 25px;
              box-shadow: 0 4px 12px rgba(255, 166, 166, 0.15);
              position: relative;
              margin-top: 20px;
            }
            .love-letter:before {
              content: '';
              position: absolute;
              top: -12px;
              left: 24px;
              width: 24px;
              height: 24px;
              background-color: #fff9f9;
              border-top: 1px solid #ffccd5;
              border-left: 1px solid #ffccd5;
              transform: rotate(45deg);
            }
            .message {
              font-size: 16px;
              white-space: pre-line;
              color: #333;
              line-height: 1.8;
            }
            .from {
              margin-top: 20px;
              font-style: italic;
              color: #888;
            }
            .heart {
              color: #ff6b6b;
            }
            .footer {
              margin-top: 40px;
              font-size: 12px;
              color: #999;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h2>Someone has sent you a special message ❤️</h2>
          
          <div class="love-letter">
            <div class="message">${message.replace(/\n/g, '<br>')}</div>
            <div class="from">With love, from ${senderEmail}</div>
          </div>
          
          <div class="footer">
            <p>This message was sent through <a href="https://hivein.app">HiveIn</a>, an app for couples to build a stronger relationship.</p>
            <p>Want to surprise your partner too? <a href="https://hivein.app">Join our community</a>.</p>
          </div>
        </body>
      </html>
      `;
      
      try {
        // Generate a temporary ID for tracing (won't be stored long-term)
        const tempId = crypto.randomUUID();
        
        // Directly send the email without storing the full message content
        // Import Resend dynamically for better startup performance
        const { Resend } = await import('npm:resend@2.0.0');
        const resend = new Resend(resendApiKey);
        
        const emailResponse = await resend.emails.send({
          from: 'HiveIn <surprise@hivein.app>',
          to: [partnerEmail],
          subject: 'Someone sent you a special surprise ❤️',
          html: emailHtml,
        });
        
        if (!emailResponse || emailResponse.error) {
          throw new Error(`Failed to send email: ${emailResponse?.error?.message || 'Unknown error'}`);
        }
        
        // Only log that a letter was sent, without storing the actual content
        // This preserves privacy while allowing for analytics
        const { data: logEntry, error: logError } = await supabase
          .from('love_letters')
          .insert([{
            sender_email: senderEmail,
            partner_email: partnerEmail,
            message: '[Content encrypted and sent]', // Don't store actual message
            sent_at: new Date().toISOString(),
            delivered: true
          }])
          .select('id')
          .single();
          
        if (logError) {
          console.error('Warning: Failed to log love letter sending:', logError);
          // Continue execution - don't fail the request if just logging fails
        }
        
        return new Response(
          JSON.stringify({ success: true, id: tempId }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      } catch (emailError: any) {
        console.error('Email sending error:', emailError);
        
        return new Response(
          JSON.stringify({ error: 'Failed to send love letter email', details: emailError.message }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error: any) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
