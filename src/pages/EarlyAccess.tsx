
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { Mail, Shield, Heart, Lock, ArrowRight, Users, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const EarlyAccess = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('early_access_requests')
        .insert({ email });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Registered",
            description: "This email is already on our early access list!",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Welcome to Early Access!",
          description: "You'll be notified when HiveIn becomes available. Thank you for your interest!"
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error submitting early access request:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen">
        <Helmet>
          <title>Early Access Confirmed - HiveIn</title>
          <meta name="description" content="You're now on the HiveIn early access list! We'll notify you when the app becomes available." />
        </Helmet>

        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">You're In!</CardTitle>
                <CardDescription className="text-green-600">
                  Welcome to the HiveIn early access community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  We'll notify you as soon as HiveIn is ready for early access. 
                  Thank you for being part of our journey to help couples build stronger relationships!
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/blogs'} 
                    variant="outline" 
                    className="border-green-300 text-green-700 hover:bg-green-50"
                  >
                    Read Our Blog
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/'} 
                    className="bg-[#d6336c] hover:bg-[#d6336c]/90 text-white"
                  >
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Early Access - HiveIn | Build Love Through Daily Habits</title>
        <meta name="description" content="Join HiveIn early access and be among the first to experience our relationship-building app with end-to-end encryption." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#d6336c] to-[#1e3d4c] rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3d4c] mb-4">
              Get Early Access to HiveIn
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be among the first to experience the app that helps couples build stronger relationships 
              through daily habits, mood sharing, and meaningful connection.
            </p>

            {/* Early Access Form */}
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="flex-1"
                      required
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-[#d6336c] hover:bg-[#d6336c]/90 text-white"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Join <ArrowRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    We'll notify you when early access opens
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* About HiveIn Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1e3d4c]">
                  <Users className="w-6 h-6" />
                  What is HiveIn?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  HiveIn is designed for couples who want to strengthen their bond through intentional daily practices. 
                  Our app helps you share moods, build habits together, and stay emotionally connected.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d6336c] rounded-full"></div>
                    Daily mood sharing and check-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d6336c] rounded-full"></div>
                    Shared habit tracking and goals
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d6336c] rounded-full"></div>
                    Gentle nudges and reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#d6336c] rounded-full"></div>
                    Private couple messaging
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1e3d4c]">
                  <Lock className="w-6 h-6" />
                  End-to-End Encryption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your relationship is sacred, and so is your privacy. HiveIn uses military-grade 
                  end-to-end encryption to ensure your conversations, moods, and shared moments remain completely private.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    Messages encrypted before leaving your device
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    Zero-knowledge architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    No third parties can access your data
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    Complete data ownership and control
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1e3d4c] mb-6">Learn More About HiveIn</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => window.location.href = '/blogs'} 
                variant="outline" 
                className="border-[#1e3d4c] text-[#1e3d4c] hover:bg-[#1e3d4c] hover:text-white"
              >
                Read Our Blog
              </Button>
              <Button 
                onClick={() => window.location.href = '/features'} 
                variant="outline" 
                className="border-[#1e3d4c] text-[#1e3d4c] hover:bg-[#1e3d4c] hover:text-white"
              >
                Explore Features
              </Button>
              <Button 
                onClick={() => window.location.href = '/about'} 
                variant="outline" 
                className="border-[#1e3d4c] text-[#1e3d4c] hover:bg-[#1e3d4c] hover:text-white"
              >
                About Us
              </Button>
              <Button 
                onClick={() => window.location.href = '/privacy'} 
                variant="outline" 
                className="border-[#1e3d4c] text-[#1e3d4c] hover:bg-[#1e3d4c] hover:text-white"
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EarlyAccess;
