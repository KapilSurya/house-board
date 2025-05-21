
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import * as CryptoJS from "https://cdn.skypack.dev/crypto-js@4.1.1";

// Initialize Supabase client
const supabaseUrl = 'https://yyijabeyffphcvjlrent.supabase.co';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Get Resend API key from environment variables
const resendApiKey = Deno.env.get('WelcomeMail') || '';

// This would come from an environment variable in a real application
const ENCRYPTION_SECRET = 'hivein-love-secret';

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
      
      try {
        // Encrypt the message
        const encryptedMessage = CryptoJS.AES.encrypt(message, ENCRYPTION_SECRET).toString();
        
        // Generate a UUID for the love letter
        const letterId = crypto.randomUUID();
        
        // Store the encrypted letter in the database
        const { data: letterData, error: letterError } = await supabase
          .from('love_letters')
          .insert([{
            id: letterId,
            sender_email: senderEmail,
            partner_email: partnerEmail,
            message: encryptedMessage,
            sent_at: new Date().toISOString(),
            delivered: false
          }])
          .select('id')
          .single();
          
        if (letterError) {
          throw new Error(`Failed to store love letter: ${letterError.message}`);
        }
        
        // Generate the letter view URL
        const letterUrl = `https://hivein.app/love/${letterId}`;
        
        // Prepare the email HTML - now pointing to the secure letter URL
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
              .message-container {
                background-color: #fff9f9;
                border: 1px solid #ffccd5;
                border-radius: 12px;
                padding: 25px;
                box-shadow: 0 4px 12px rgba(255, 166, 166, 0.15);
                margin-top: 20px;
                text-align: center;
              }
              .button {
                display: inline-block;
                background-color: #d6336c;
                color: white;
                padding: 12px 24px;
                border-radius: 6px;
                text-decoration: none;
                font-weight: bold;
                margin: 20px 0;
              }
              .heart {
                color: #ff6b6b;
                font-size: 24px;
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
            
            <div class="message-container">
              <p>A secret love letter is waiting for you.</p>
              <p>Someone wants to share their feelings with you in a special way.</p>
              
              <a href="${letterUrl}" class="button">Read Your Love Letter</a>
              
              <p><small>This link will take you to a secure page where you can read your message.</small></p>
            </div>
            
            <div class="footer">
              <p>This message was sent through <a href="https://hivein.app">HiveIn</a>, an app for couples to build a stronger relationship.</p>
              <p>Want to surprise your partner too? <a href="https://hivein.app">Join our community</a>.</p>
            </div>
          </body>
        </html>
        `;
        
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
        
        // Update the letter as delivered
        await supabase
          .from('love_letters')
          .update({ delivered: true })
          .eq('id', letterId);
        
        return new Response(
          JSON.stringify({ success: true, id: letterId, url: letterUrl }),
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
