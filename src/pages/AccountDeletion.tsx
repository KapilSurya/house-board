
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { Trash2, Shield, Clock, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  reason: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const AccountDeletion = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      reason: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('account_deletion_requests')
        .insert({
          email: data.email,
          reason: data.reason || null,
        });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: "Request Submitted",
        description: "Your account deletion request has been received and will be processed within 30 days.",
      });
    } catch (error) {
      console.error('Error submitting deletion request:', error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen">
        <Helmet>
          <title>Request Submitted - HiveIn</title>
          <meta name="description" content="Your account deletion request has been submitted successfully." />
        </Helmet>

        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Request Submitted Successfully</CardTitle>
                <CardDescription className="text-green-600">
                  Your account deletion request has been received and will be processed within 30 days.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  You will receive a confirmation email once your account has been deleted.
                </p>
                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  Return to Homepage
                </Button>
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
        <title>Request Account Deletion - HiveIn</title>
        <meta name="description" content="Request deletion of your HiveIn account and all associated data." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e3d4c] mb-4">
              Request Account Deletion
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're sorry to see you go. Please fill out the form below to request deletion of your HiveIn account.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Information Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1e3d4c]">
                    <AlertTriangle className="w-5 h-5" />
                    Before You Delete Your Account
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Alternative Solutions</h3>
                    <p className="text-gray-600 text-sm">
                      Consider temporarily deactivating your account in the app settings instead of permanent deletion.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">App-Based Deletion</h3>
                    <p className="text-gray-600 text-sm">
                      You can also delete your account directly from within the HiveIn mobile app by going to Settings → Account → Delete Account.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1e3d4c]">
                    <Shield className="w-5 h-5" />
                    Data We Collect & Delete
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">What Gets Deleted</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Your email address and account credentials</li>
                      <li>• All personal content (habits, moods, logs, messages)</li>
                      <li>• Partner connection data</li>
                      <li>• App preferences and settings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">What We Keep (Anonymized)</h3>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Basic usage statistics (anonymous)</li>
                      <li>• Aggregated feature usage data</li>
                      <li>• No personally identifiable information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#1e3d4c]">
                    <Clock className="w-5 h-5" />
                    Processing Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Request Processing</span>
                      <span className="font-semibold text-gray-800">Within 30 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Backup Retention</span>
                      <span className="font-semibold text-gray-800">90 days max</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Legal Obligations</span>
                      <span className="font-semibold text-gray-800">As required by law</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1e3d4c]">Deletion Request Form</CardTitle>
                  <CardDescription>
                    Please provide your email address to process your account deletion request.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your account email"
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reason (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Help us improve by sharing why you're leaving..."
                                className="min-h-[100px]"
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-amber-800 mb-1">Important Notice</h4>
                            <p className="text-amber-700 text-sm">
                              Account deletion is permanent and cannot be undone. All your data will be permanently removed from our systems.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting Request...' : 'Submit Deletion Request'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  Need help? Contact us at{' '}
                  <a href="mailto:team@hivein.app" className="text-[#1e3d4c] underline">
                    team@hivein.app
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountDeletion;
