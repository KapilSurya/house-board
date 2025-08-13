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

            <Card className="shadow-sm gradient-bg card-hover text-white ring-1 ring-white/10 border-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Your Invite
                </CardTitle>
                <CardDescription>
                  A small page for a big feeling — crafted with care by HiveIn.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pairing Key - HiveIn Home */}
                <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-5 ring-1 ring-white/10 shadow-md animate-fade-in">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
                        <Key className="h-4 w-4" />
                        Your home key
                      </div>
                      <div className="mt-2">
                        <div className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-4 py-3 shadow-sm ring-1 ring-inset ring-white/10 backdrop-blur-sm hover-scale">
                          <span className="text-sm text-white/70">Code</span>
                          <span className="text-3xl font-semibold tracking-[0.35em]">{code || "······"}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-white/80">
                        This is the key to your shared HiveIn home. Share it with care.
                      </p>
                    </div>
                    <Button size="lg" onClick={handleCopy} disabled={!code} aria-label="Copy pairing code" className="shrink-0">
                      <Copy className="h-4 w-4 mr-2" /> Copy code
                    </Button>
                  </div>
                </div>

                {/* Love Letter - Scroll */}
                {letter && <div className="relative overflow-hidden rounded-2xl border border-rose-200/40 bg-gradient-to-b from-rose-100/70 to-rose-50/50 shadow-md backdrop-blur-sm before:absolute before:inset-x-6 before:top-2 before:h-3 before:rounded-full before:bg-rose-200/60 after:absolute after:inset-x-6 after:bottom-2 after:h-3 after:rounded-full after:bg-rose-200/60">
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                      <div className="text-xs uppercase tracking-wide mb-3 text-rose-700/80">Love letter</div>
                      <blockquote className="font-handwriting text-3xl leading-relaxed tracking-wide text-rose-900">
                        {letter}
                      </blockquote>
                      <div className="mt-4 text-sm text-rose-700/80">
                        — sealed with care in your HiveIn home
                      </div>
                    </div>
                  </div>}

                {/* Last Action - Teaser */}
                {laText && <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-white">
                    <div className="text-sm uppercase text-white/70 mb-2">A peek inside your shared home</div>
                    <p className="text-sm text-white/80 mb-3">
                      Your partner has been tending to your HiveIn home. Join the app to see it together.
                    </p>
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-house-teal" />
                      <span className="font-medium">{laText}</span>
                    </div>
                  </div>}

                <Separator />

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={deepLink} className="w-full sm:w-auto">
                    <Button className="w-full" size="lg">
                      Open in app
                    </Button>
                  </a>
                  <a href={playStoreLink} target="_blank" rel="noopener" className="w-full sm:w-auto">
                    <Button variant="secondary" className="w-full" size="lg">
                      Google Play <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                  <a href={appStoreLink} target="_blank" rel="noopener" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full" size="lg">
                      App Store <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                </div>

                {/* Helpful links */}
                <div className="text-sm text-muted-foreground">
                  
                </div>
              </CardContent>
            </Card>

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