
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import BlogNavbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';

// This would come from an environment variable in a real application
// For this demo, we'll hardcode it (not ideal for production)
const ENCRYPTION_SECRET = 'hivein-love-secret';

const LoveLetter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<{
    sender_email: string;
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const decryptLetter = (encrypted: string): string => {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_SECRET);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Decryption error:', error);
      return '';
    }
  };

  useEffect(() => {
    const fetchLetter = async () => {
      if (!id) {
        setError('No letter ID provided');
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('love_letters')
          .select('sender_email, message, read_at')
          .eq('id', id)
          .maybeSingle();

        if (error) throw error;
        
        if (!data) {
          setError('Letter not found or it may have expired');
          setIsLoading(false);
          return;
        }

        // Decrypt the message
        const decryptedMessage = decryptLetter(data.message || '');
        
        if (!decryptedMessage) {
          setError('Unable to read this love letter');
          setIsLoading(false);
          return;
        }

        // Update read status if not already marked as read
        if (!data.read_at) {
          await supabase
            .from('love_letters')
            .update({ read_at: new Date().toISOString() })
            .eq('id', id);
        }

        setLetter({
          sender_email: data.sender_email || '',
          message: decryptedMessage,
        });
      } catch (err) {
        console.error('Error fetching letter:', err);
        setError('Could not retrieve this love letter');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLetter();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>A Special Message For You | HiveIn</title>
        <meta name="description" content="You've received a special love letter from someone who cares about you." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" />
      </Helmet>
      
      <BlogNavbar />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-24 pb-16">
        <div className="container max-w-3xl mx-auto px-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="animate-pulse flex flex-col items-center">
                <Heart className="h-12 w-12 text-pink-400 animate-pulse" />
                <p className="mt-4 text-gray-500">Loading your special message...</p>
              </div>
            </div>
          ) : error ? (
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="mb-6 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{error}</h2>
              <p className="text-gray-600 mb-6">The love letter you're looking for might have expired or doesn't exist.</p>
              <Link to="/">
                <Button className="bg-pink-500 hover:bg-pink-600">
                  Return to Home
                </Button>
              </Link>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4" />
                <h1 className="font-playfair text-3xl md:text-4xl text-gray-800 mb-2">You've received a love letter 💌</h1>
                <p className="text-gray-600 italic">A special message just for you</p>
              </div>
              
              <div 
                className="bg-[#fffdf8] border border-dashed border-[#e5b7b0] rounded-xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-8"
                style={{ 
                  fontFamily: "'Georgia', serif",
                  lineHeight: 1.8,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e5b7b0' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              >
                <div 
                  className="text-gray-800"
                  style={{ 
                    fontSize: '1.1rem',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {letter?.message}
                </div>
                
                <div className="mt-8 text-right italic text-gray-600">
                  With love, from {letter?.sender_email ? letter.sender_email.split('@')[0] : 'Someone special'}
                </div>
              </div>
              
              <div className="flex justify-center items-center mb-6">
                <img 
                  src="https://i.imgur.com/B6f13Uf.png" 
                  alt="Wax seal" 
                  className="h-16 opacity-80" 
                />
              </div>
              
              <div className="text-center">
                <Link to="/">
                  <Button className="bg-[#d6336c] hover:bg-[#b52a5b] text-white">
                    Visit HiveIn
                  </Button>
                </Link>
                
                <p className="mt-4 text-sm text-gray-500">
                  HiveIn is built for the quiet work of staying close.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default LoveLetter;
