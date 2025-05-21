import React from 'react';
import { useParams } from 'react-router-dom';

const LoveLetterViewer = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Your Love Letter ❤️</h1>
      <p className="text-gray-700 text-center max-w-xl">
        This is where the decrypted love letter will be shown for ID: <strong>{id}</strong>
      </p>
    </div>
  );
};

export default LoveLetterViewer;
