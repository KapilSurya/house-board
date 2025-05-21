import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";

const LoveLetterViewer = () => {
  const { id } = useParams();
  const [letter, setLetter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchLetter = async () => {
      if (!id) return;
      const { data, error } = await supabase
        .from('love_letters')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setLetter(data);
      }
      setLoading(false);
    };
    fetchLetter();
  }, [id]);

  if (loading) return <div className="text-center p-12">Loading your message...</div>;
  if (notFound) return <div className="text-center p-12 text-red-500">Letter not found.</div>;

  return (
    <div className="bg-[#fffaf3] min-h-screen font-serif">
      <Helmet>
        <title>A Special Letter Just for You 💌</title>
        <meta name="description" content="Someone sent you a love letter via HiveIn." />
      </Helmet>

      <main className="max-w-2xl mx-auto px-6 py-16 bg-white shadow-xl rounded-xl mt-12 border border-[#ffd6dc] relative">
        <h1 className="text-2xl md:text-3xl font-bold text-[#d6336c] text-center mb-6">
          You've Got a Love Letter 💌
        </h1>
        <p className="text-gray-800 leading-loose whitespace-pre-line">{letter.message}</p>
        <p className="mt-8 text-sm italic text-right text-gray-500">
          With love, from {letter.sender_email}
        </p>

        <div className="mt-12 text-center">
          <img src="https://i.imgur.com/B6f13Uf.png" alt="Wax Seal" className="mx-auto w-16" />
          <p className="text-xs text-gray-400 mt-2">Delivered with love via HiveIn</p>
        </div>
      </main>
    </div>
  );
};

export default LoveLetterViewer;
