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
import { Copy, ExternalLink, Heart, Rocket, Sparkles } from "lucide-react";
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
    const qp = new URLSearchParams(
      Object.fromEntries(Object.entries(params).filter(([, v]) => !!v))
    ).toString();
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

  const playStoreLink = useMemo(
    () => appendParams(PLAY_STORE, { code: code || undefined, ref: refParam || undefined }),
    [code, refParam]
  );
  const appStoreLink = useMemo(
    () => appendParams(APP_STORE, { code: code || undefined, ref: refParam || undefined }),
    [code, refParam]
  );

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      toast({ title: "Pairing code copied", description: "Paste it in HiveIn to pair." });
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy the code manually." });
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

  const pageDescription = letter
    ? `A love letter and invite to pair on HiveIn. Code: ${code ?? ""}.`
    : `Pair on HiveIn with code ${code ?? ""}. Read your partner's invite.`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
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
              <div className="inline-flex items-center gap-2 text-primary mb-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide">A gentle invite</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight">
                A Love Letter for You
              </h1>
              <p className="text-muted-foreground mt-2">
                Open this with the HiveIn app to pair instantly, or copy the code below.
              </p>
            </header>

            <Card className="shadow-sm">
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
                <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-5 ring-1 ring-primary/20 shadow-md animate-fade-in">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Your home key
                      </div>
                      <div className="mt-2">
                        <div className="inline-flex items-center gap-3 rounded-xl border border-primary/30 bg-card/80 px-4 py-3 shadow-sm ring-1 ring-inset ring-primary/20 hover-scale">
                          <span className="text-sm text-muted-foreground">Code</span>
                          <span className="text-3xl font-semibold tracking-[0.35em]">{code || "······"}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        This is the key to your shared HiveIn home. Share it with care.
                      </p>
                    </div>
                    <Button size="lg" onClick={handleCopy} disabled={!code} aria-label="Copy pairing code" className="shrink-0">
                      <Copy className="h-4 w-4 mr-2" /> Copy code
                    </Button>
                  </div>
                </div>

                {/* Love Letter - Scroll */}
                {letter && (
                  <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-b from-accent/20 to-background/40 shadow-md">
                    <div className="absolute left-4 right-4 top-3 h-2 rounded-full bg-accent/40" />
                    <div className="absolute left-4 right-4 bottom-3 h-2 rounded-full bg-accent/40" />
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                      <div className="text-xs uppercase text-muted-foreground tracking-wide mb-3">Love letter</div>
                      <blockquote className="font-handwriting text-2xl leading-relaxed tracking-wide text-foreground/90">
                        {letter}
                      </blockquote>
                      <div className="mt-4 text-sm text-muted-foreground">
                        — sealed with care in your HiveIn home
                      </div>
                    </div>
                  </div>
                )}

                {/* Last Action - Teaser */}
                {laText && (
                  <div className="rounded-2xl border bg-muted/30 p-5">
                    <div className="text-sm uppercase text-muted-foreground mb-2">A peek inside</div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your partner has been tending to your HiveIn home. Join to see it together.
                    </p>
                    <div className="flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-primary" />
                      <span className="font-medium">{laText}</span>
                    </div>
                  </div>
                )}

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
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link to="/blogs" className="story-link">Read the HiveIn Journal →</Link>
                    <Link to="/features" className="story-link">See features →</Link>
                    <Link to="/who-is-it-for" className="story-link">Who is it for? →</Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loading and error states */}
            {loading && (
              <p className="text-center text-muted-foreground mt-6">Loading your invite…</p>
            )}
            {error && (
              <p className="text-center text-destructive mt-6">{error}</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Invite;
