import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/integrations/firebase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, ExternalLink, Heart, Rocket, Sparkles, Key } from "lucide-react";
import { toast } from "@/hooks/use-toast";
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
            <header className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-house-teal mb-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide">A gentle invite</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight text-white">
                A Love Letter for You
              </h1>
              <p className="mt-2 text-white/80">
                Open this with the HiveIn app to pair instantly, or copy the code below.
              </p>
            </header>

            <div className="space-y-8">
              {/* Love Letter */}
              {letter && (
                <div className="relative overflow-hidden rounded-3xl border border-house-teal/20 bg-gradient-to-br from-white/95 to-house-teal/5 shadow-lg backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-house-teal/30 via-house-sage/30 to-house-teal/30" />
                  <div className="px-8 py-10 sm:px-12 sm:py-14">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 text-house-teal/70 mb-2">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm font-medium tracking-wide">A letter for you</span>
                      </div>
                    </div>
                    <div className="font-handwriting text-2xl sm:text-3xl leading-relaxed tracking-wide text-center text-slate-700 max-w-2xl mx-auto">
                      {letter}
                    </div>
                    <div className="mt-8 text-center text-sm text-house-teal/70">
                      — written with love
                    </div>
                  </div>
                </div>
              )}

              {/* Pairing Code */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-sm ring-1 ring-inset ring-white/10 backdrop-blur-sm">
                  <span className="text-lg font-mono tracking-[0.3em] text-white">{code || "······"}</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={handleCopy} 
                    disabled={!code} 
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-white/60">
                  Use this code to join your shared home
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a href={playStoreLink} target="_blank" rel="noopener" className="flex-1">
                  <Button variant="secondary" className="w-full h-14 text-base" size="lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm"></div>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-70">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </div>
                  </Button>
                </a>
                <a href={appStoreLink} target="_blank" rel="noopener" className="flex-1">
                  <Button variant="outline" className="w-full h-14 text-base border-white/20 hover:bg-white/10" size="lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-70">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                  </Button>
                </a>
              </div>
            </div>

            {/* Loading and error states */}
            {loading && <p className="text-center text-white/80 mt-6">Loading your invite…</p>}
            {error && <p className="text-center text-destructive mt-6">{error}</p>}
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Invite;