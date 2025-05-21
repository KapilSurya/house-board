
import React from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About HiveIn - Our Story and Mission</title>
        <meta name="description" content="Learn about HiveIn's mission to help couples build stronger relationships through daily habits and shared experiences." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e3d4c] mb-8 text-center">About HiveIn</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-center mb-8">At HiveIn, we believe relationships aren't built in grand gestures — they're built in the quiet, daily moments of connection.</p>
            
            <div className="my-12 p-8 bg-blue-50 rounded-lg text-center">
              <p className="text-xl italic text-[#1e3d4c]">We're a small, passionate team building a space for couples to feel closer, communicate better, and grow together — one small ritual at a time.</p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#1e3d4c]">Our Story</h2>
            <p>HiveIn started with a simple realization:</p>
            <p className="font-semibold my-4">Talking isn't enough. Relationships need space, rhythm, and reminders to feel alive.</p>
            <p>So we built a cozy app that feels more like a shared journal than a productivity tool. One that helps you:</p>
            
            <ul className="list-disc pl-6 my-6 space-y-2">
              <li>Check in emotionally</li>
              <li>Build shared habits</li>
              <li>Nudge each other gently</li>
              <li>Celebrate your growth together</li>
            </ul>
            
            <p>Whether you're in a long-distance relationship, living together, or navigating busy schedules — HiveIn is your shared emotional home.</p>
            
            <p className="my-6">We're still early, but we're building with care, listening deeply, and inviting you to shape this with us.</p>
            
            <div className="my-12 flex justify-center">
              <Button asChild className="bg-[#1e3d4c] hover:bg-[#2e4e5f]">
                <Link to="/">
                  Explore HiveIn
                </Link>
              </Button>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-center">💌 Want to reach out or collaborate? Drop us a note at <a href="mailto:team@hivein.app" className="text-[#1e3d4c] underline">team@hivein.app</a></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
