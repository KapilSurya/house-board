import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "@/integrations/firebase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, ExternalLink, Heart, Rocket, Sparkles, Key } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type LastAction = {
  f: "chatMessages" | "dailyQuestions";
  a?: string | null;
  t?: string | null;
};
interface InviteDoc {
  c: string; // pairing code
  by?: string | null;
  ll?: string | null; // love letter
  la?: LastAction | null; // last action
  cAt?: unknown;
  uAt?: unknown;
  ttl?: unknown;
  v?: number;
}
const pageTitle = "HiveIn Love Letter Invite — Pair with your partner";
function appendParams(base: string, params: Record<string, string | undefined>) {
  try {
    const url = new URL(base);
    Object.entries(params).forEach(([k, v]) => {
      if (v) url.searchParams.set(k, v);
    });
    return url.toString();
  } catch {
    // Fallback for malformed bases
    const qp = new URLSearchParams(Object.fromEntries(Object.entries(params).filter(([, v]) => !!v))).toString();
    return `${base}${base.includes("?") ? "&" : "?"}${qp}`;
  }
}
const Invite: React.FC = () => {
  const [sp] = useSearchParams();
  const codeParam = sp.get("code") || undefined;
  const refParam = sp.get("ref") || undefined;
  const [data, setData] = useState<InviteDoc | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showBetaDialog, setShowBetaDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const run = async () => {
      if (!refParam) {
        setError("Missing invite reference.");
        setLoading(false);
        return;
      }
      try {
        const snap = await getDoc(doc(db, "invites", refParam));
        if (!snap.exists()) {
          setError("This invite link is no longer available.");
        } else {
          setData(snap.data() as InviteDoc);
        }
      } catch (e) {
        setError("We couldn't load this invite. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [refParam]);
  const code = useMemo(() => codeParam || data?.c, [codeParam, data?.c]);
  const deepLink = useMemo(() => {
    const c = code || "";
    const r = refParam || "";
    return `com.hiveinnative.app://invite?code=${encodeURIComponent(c)}&ref=${encodeURIComponent(r)}`;
  }, [code, refParam]);
  const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.hiveinnative.app";
  const APP_STORE = "https://apps.apple.com/app/id0000000000"; // TODO: replace with real App Store ID

  const playStoreLink = useMemo(() => appendParams(PLAY_STORE, {
    code: code || undefined,
    ref: refParam || undefined
  }), [code, refParam]);
  const appStoreLink = useMemo(() => appendParams(APP_STORE, {
    code: code || undefined,
    ref: refParam || undefined
  }), [code, refParam]);
  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Pairing code copied",
        description: "Paste it in HiveIn to pair."
      });
    } catch {
      toast({
        title: "Couldn't copy",
        description: "Please copy the code manually."
      });
    }
  };
  const lastActionLabel = (la?: LastAction | null) => {
    if (!la) return null;
    if (la.f === "chatMessages") return "Sent a message in chat";
    if (la.f === "dailyQuestions") return "Answered a daily question";
    return null;
  };

  const handleStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBetaDialog(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, "requests"), {
        email: email.trim(),
        timestamp: new Date(),
        source: "invite_page"
      });
      
      toast({
        title: "Thank you!",
        description: "We'll reach out to you soon with beta access."
      });
      
      setEmail("");
      setShowBetaDialog(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  const letter = data?.ll?.trim();
  const laText = lastActionLabel(data?.la);
  const pageDescription = letter ? `A love letter and invite to pair on HiveIn. Code: ${code ?? ""}.` : `Pair on HiveIn with code ${code ?? ""}. Read your partner's invite.`;
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription.slice(0, 155)} />
        <link rel="canonical" href={`https://hivein.app/invite?ref=${encodeURIComponent(refParam || "")}`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription.slice(0, 200)} />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <section className="relative">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
            <header className="text-center mb-8 mt-16 sm:mt-20">
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight text-white">
                A Love Letter for You
              </h1>
              <p className="mt-2 text-white/80">
                Open this with the HiveIn app to pair instantly, or copy the code below.
              </p>
            </header>

            <div className="space-y-6 sm:space-y-8">
              {/* Love Letter */}
              {letter && (
                <div className="relative mx-auto max-w-lg">
                  {/* Scroll Design */}
                  <div className="relative bg-gradient-to-b from-pink-50 to-pink-100 rounded-t-3xl rounded-b-lg shadow-2xl border border-pink-200/50">
                    {/* Scroll Top Curl */}
                    <div className="absolute -top-4 left-0 right-0 h-8 bg-gradient-to-b from-pink-100 to-pink-200 rounded-t-full border-t border-x border-pink-200/50 shadow-lg"></div>
                    
                    {/* Letter Content */}
                    <div className="px-6 py-10 sm:px-8 sm:py-12 relative">
                      {/* Ruled Lines Background */}
                      <div className="absolute left-6 right-6 sm:left-8 sm:right-8 top-10 sm:top-12">
                        {Array.from({ length: Math.ceil((letter?.length || 0) / 60) + 2 }).map((_, i) => (
                          <div key={i} className="border-b border-pink-300/30" style={{ marginTop: `${2.0 + i * 2.0}rem` }}></div>
                        ))}
                      </div>
                      
                      {/* Letter Text */}
                      <div 
                        className="relative font-handwriting text-lg sm:text-xl leading-relaxed text-slate-700"
                        style={{ fontFamily: 'Caveat, cursive', lineHeight: '2.0rem' }}
                      >
                        {letter}
                      </div>
                      
                      {/* Signature */}
                      <div className="mt-6 text-right">
                        <div 
                          className="font-handwriting text-base text-slate-600 inline-block"
                          style={{ fontFamily: 'Caveat, cursive' }}
                        >
                          — with love ♡
                        </div>
                      </div>
                    </div>
                    
                    {/* Scroll Bottom Curl */}
                    <div className="absolute -bottom-3 left-0 right-0 h-6 bg-gradient-to-t from-pink-100 to-pink-200 rounded-b-full border-b border-x border-pink-200/50 shadow-lg"></div>
                  </div>
                </div>
              )}

              {/* Pairing Code */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur-sm">
                  <span className="text-base font-mono tracking-[0.2em] text-white/90">{code || "······"}</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={handleCopy} 
                    disabled={!code} 
                    className="text-white/60 hover:text-white/80 hover:bg-white/5 h-7 w-7 p-0"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-xs text-white/50">
                  Use this code to join the house
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-row gap-3 justify-center max-w-sm mx-auto">
                <button onClick={handleStoreClick} className="flex-1">
                  <div className="flex items-center justify-center gap-2 bg-black text-white rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-75">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </button>
                <button onClick={handleStoreClick} className="flex-1">
                  <div className="flex items-center justify-center gap-2 bg-black text-white rounded-lg px-3 py-2 hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-75">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Loading and error states */}
            {loading && <p className="text-center text-white/80 mt-6">Loading your invite…</p>}
            {error && <p className="text-center text-destructive mt-6">{error}</p>}
          </div>
        </section>
      </main>

      <Footer />

      {/* Beta Signup Dialog */}
      <Dialog open={showBetaDialog} onOpenChange={setShowBetaDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Beta</DialogTitle>
            <DialogDescription>
              We're currently in beta testing! Enter your email address and we'll give you access and reach out to you quickly.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowBetaDialog(false)}
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={submitting || !email.trim()}>
                {submitting ? "Submitting..." : "Request Access"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Invite;