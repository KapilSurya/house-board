
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { auth } from "@/integrations/firebase/client";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [sessionValid, setSessionValid] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const verifyCode = async () => {
      try {
        const mode = searchParams.get('mode');
        const oobCode = searchParams.get('oobCode');

        if (mode !== 'resetPassword' || !oobCode) {
          toast({
            title: "Invalid reset link",
            description: "This password reset link is invalid or has expired.",
            variant: "destructive",
          });
          navigate('/');
          return;
        }

        await verifyPasswordResetCode(auth, oobCode);
        setSessionValid(true);
      } catch (error: any) {
        console.error('Reset code verification error:', error);
        toast({
          title: "Invalid or expired link",
          description: "Please request a new password reset link.",
          variant: "destructive",
        });
        navigate('/');
      } finally {
        setSessionLoading(false);
      }
    };

    verifyCode();
  }, [searchParams, navigate, toast]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sessionValid) {
      toast({
        title: "Session invalid",
        description: "Please request a new password reset link.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const oobCode = searchParams.get('oobCode');
      if (!oobCode) {
        throw new Error('Missing reset code');
      }

      await confirmPasswordReset(auth, oobCode, password);

      toast({
        title: "Password updated successfully",
        description: "Your password has been reset. You can now log in with your new password.",
      });

      // Redirect to home page after successful password reset
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error: any) {
      console.error('Password update error:', error);
      toast({
        title: "Error resetting password",
        description: error.message || "An error occurred while resetting your password.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-houseboard-dark to-houseboard-medium">
        <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              Setting up password reset...
            </h1>
            <div className="text-white/70">Please wait while we verify your reset link.</div>
          </div>
        </div>
      </div>
    );
  }

  if (!sessionValid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-houseboard-dark to-houseboard-medium">
        <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              Invalid Reset Link
            </h1>
            <div className="text-white/70 mb-6">This password reset link is invalid or has expired.</div>
            <Button
              onClick={() => navigate('/')}
              className="w-full bg-[#43B3AE] hover:bg-[#43B3AE]/90 text-white"
            >
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-houseboard-dark to-houseboard-medium">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Reset Your Password
        </h1>
        
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
          </div>
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#43B3AE] hover:bg-[#43B3AE]/90 text-white"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
