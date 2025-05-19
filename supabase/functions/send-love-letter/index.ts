
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

// Custom type for tracking love letters
interface LoveLetter {
  id?: string;
  sender_email: string;
  partner_email: string;
  message: string;
  sent_at: string;
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
      
      // Store the love letter in database first
      const loveLetter: LoveLetter = {
        sender_email: senderEmail,
        partner_email: partnerEmail,
        message,
        sent_at: new Date().toISOString(),
      };
      
      // Insert into a love_letters table (we'll create this table later)
      const { data: savedLetter, error: dbError } = await supabase
        .from('love_letters')
        .insert([loveLetter])
        .select()
        .single();
      
      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save love letter');
      }
      
      // Send the love letter email
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
        // Import Resend dynamically
        const { Resend } = await import('npm:resend@2.0.0');
        const resend = new Resend(resendApiKey);
        
        const emailResponse = await resend.emails.send({
          from: 'HiveIn <surprise@hivein.app>',
          to: [partnerEmail],
          subject: 'Someone sent you a special surprise ❤️',
          html: emailHtml,
        });
        
        // Update the record to mark it as sent
        await supabase
          .from('love_letters')
          .update({ delivered: true })
          .eq('id', savedLetter.id);
        
        return new Response(
          JSON.stringify({ success: true, id: savedLetter.id }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        
        // Mark as failed in database
        await supabase
          .from('love_letters')
          .update({ delivered: false, error: JSON.stringify(emailError) })
          .eq('id', savedLetter.id);
        
        throw new Error('Failed to send love letter email');
      }
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
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
