
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

// Get Resend API key from environment variables
const resendApiKey = Deno.env.get('WelcomeMail');

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

      try {
        // Import Resend dynamically
        const { Resend } = await import('npm:resend@2.0.0');
        
        if (!resendApiKey) {
          console.error('RESEND_API_KEY is not set in environment variables');
          throw new Error('Missing API key configuration');
        }
        
        const resend = new Resend(resendApiKey);
        
        const emailResponse = await resend.emails.send({
          from: 'HiveIn <welcome@hivein.app>',
          to: [email],
          subject: 'Welcome to HiveIn!',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <title>Welcome to HiveIn</title>
                <style>
                  body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                  }
                  .header {
                    text-align: center;
                    margin-bottom: 24px;
                  }
                  .header img {
                    width: 80px;
                    height: auto;
                  }
                  h1 {
                    color: #094663;
                    margin-top: 0;
                  }
                  .content {
                    background: #f9f9f9;
                    border-radius: 8px;
                    padding: 24px;
                    margin-bottom: 24px;
                  }
                  .benefits {
                    margin: 20px 0;
                  }
                  .benefit-item {
                    margin-bottom: 12px;
                    display: flex;
                  }
                  .check {
                    color: #43B3AE;
                    margin-right: 10px;
                  }
                  .cta-button {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #43B3AE;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: bold;
                    margin: 16px 0;
                  }
                  .footer {
                    text-align: center;
                    font-size: 14px;
                    color: #888;
                    margin-top: 40px;
                  }
                </style>
              </head>
              <body>
                <div class="header">
                  <img src="https://hivein.app/lovable-uploads/ca0af61c-6896-4e91-9fa4-03d93d138db7.png" alt="HiveIn Logo">
                  <h1>Welcome to HiveIn! ✨</h1>
                </div>
                
                <div class="content">
                  <p>Hi there,</p>
                  <p>Thank you for joining the HiveIn community! We're thrilled to have you aboard as we build the future of relationships together.</p>
                  
                  <div class="benefits">
                    <div class="benefit-item">
                      <span class="check">✓</span>
                      <span>You're on the early access list for our June 2025 launch</span>
                    </div>
                    <div class="benefit-item">
                      <span class="check">✓</span>
                      <span>You'll receive free premium access for life</span>
                    </div>
                    <div class="benefit-item">
                      <span class="check">✓</span>
                      <span>Your feedback will directly shape our product</span>
                    </div>
                  </div>
                  
                  <p>We're building HiveIn to help couples like you create meaningful connections that last. Stay tuned for exclusive updates and opportunities to provide input on our features.</p>
                  
                  <a href="https://hivein.app" class="cta-button">Visit HiveIn</a>
                  
                  <p>If you have any questions or ideas, feel free to reply to this email - we'd love to hear from you!</p>
                </div>
                
                <p>Warm regards,<br>The HiveIn Team</p>
                
                <div class="footer">
                  <p>© 2025 HiveIn. All rights reserved.</p>
                  <p>You're receiving this email because you signed up for HiveIn early access.</p>
                </div>
              </body>
            </html>
          `,
        });
        
        console.log('Welcome email sent successfully:', emailResponse);
        
        return new Response(
          JSON.stringify({ success: true }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
        throw emailError;
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
