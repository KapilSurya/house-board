
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from 'react-router-dom';
import { db } from "@/integrations/firebase/client";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/dateUtils';

// Sample test blog content in case the database is empty
const testBlogContent = {
  title: "The Art of Active Listening for Partners",
  slug: "art-of-active-listening",
  summary: "Master the skill of truly hearing your partner to foster understanding and emotional connection.",
  content: `## Why Active Listening Matters

Active listening is more than just hearing words - it's about truly understanding your partner's perspective, emotions, and needs. When we actively listen, we show our partners that they are valued and that their thoughts matter.

### The Fundamentals of Active Listening

1. Give your full attention - put away distractions and face your partner
2. Maintain eye contact to show you're engaged
3. Avoid interrupting - let them complete their thoughts
4. Ask clarifying questions to ensure understanding

> "The biggest communication problem is we do not listen to understand. We listen to reply." - Stephen R. Covey

When your partner feels truly heard, it creates a foundation of trust and safety in your relationship. This doesn't mean you always have to agree, but understanding must come before resolution.

### Practical Tips to Improve Your Listening Skills

- Reflect back what you've heard to confirm understanding
- Notice non-verbal cues that might reveal unspoken feelings
- Be mindful of your own reactions and set them aside temporarily
- Practice patience - good listening cannot be rushed

The beauty of active listening is that it's a skill anyone can develop with practice. Start with small conversations and gradually build your capacity for deeper, more meaningful exchanges.

## The Impact on Your Relationship

Couples who master active listening report greater satisfaction in their relationships. It reduces misunderstandings, prevents conflicts from escalating, and creates a deeper sense of partnership.

### Moving Forward Together

Try setting aside 15 minutes each day for uninterrupted listening practice. Take turns sharing thoughts while the other person focuses solely on understanding, not responding or solving.

With consistent practice, active listening becomes a natural part of your relationship dynamic, strengthening your bond and helping you navigate life's challenges as a true team.`,
  published_at: new Date().toISOString(),
  cover_image_url: null
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      if (!slug) throw new Error('Missing slug');
      const postsRef = collection(db, 'blog_posts');
      const q = query(postsRef, where('slug', '==', slug), limit(1));
      const snapshot = await getDocs(q);
      const doc = snapshot.docs[0]?.data();
      if (!doc && slug === testBlogContent.slug) return testBlogContent;
      if (!doc) throw new Error('Blog post not found');
      return doc as any;
    }
  });

  const renderContent = () => {
    if (!post?.content) return null;
    
    // Very simple markdown-like rendering
    return post.content.split('\n\n').map((paragraph, i) => {
      // Headers
      if (paragraph.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 font-serif">{paragraph.replace('## ', '')}</h2>;
      }
      
      if (paragraph.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold mt-6 mb-3 font-serif">{paragraph.replace('### ', '')}</h3>;
      }
      
      // Blockquote
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={i} className="border-l-4 border-[#1e3d4c] pl-4 py-2 my-6 bg-blue-50/50 italic">
            <p className="text-gray-700">{paragraph.replace('> ', '')}</p>
          </blockquote>
        );
      }
      
      // Default paragraph
      return <p key={i} className="mb-6 leading-relaxed text-gray-700">{paragraph}</p>;
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{post?.title || 'Blog Post'} - HiveIn Journal</title>
        <meta name="description" content={post?.summary || 'HiveIn Journal article'} />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading article...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">Error loading article. Please try again later.</p>
            <Link to="/blogs" className="text-[#1e3d4c] hover:underline mt-4 inline-block">
              ← Back to all articles
            </Link>
          </div>
        ) : post ? (
          <>
            {/* Header */}
            <div className="container mx-auto px-4 text-center mb-8 max-w-3xl">
              <Link to="/blogs" className="text-[#1e3d4c] hover:underline mb-6 inline-block">
                ← Back to all articles
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1e3d4c] mb-4">
                {post.title}
              </h1>
              
              {post.summary && (
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                  {post.summary}
                </p>
              )}
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>By Team HiveIn</span>
                <span>•</span>
                <span>{formatDate(new Date(post.published_at))}</span>
              </div>
            </div>

            {/* Cover image - now constrained to content width */}
            <div className="container mx-auto px-4 max-w-[720px] mb-12">
              {post.cover_image_url ? (
                <img 
                  src={post.cover_image_url} 
                  alt={post.title}
                  className="w-full h-auto object-cover rounded-lg"
                  width="720"
                  height="400"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[250px] bg-[#2e4e5f] flex items-center justify-center rounded-lg">
                  <span className="text-white/30 text-2xl font-serif">HiveIn Journal</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 max-w-[720px]">
              <article className="prose prose-lg max-w-none font-serif">
                {renderContent()}
              </article>
              
              {/* CTA */}
              <div className="mt-16 mb-8 p-6 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <h3 className="text-xl font-medium text-[#1e3d4c] mb-3">
                  HiveIn is designed to help couples stay emotionally close, even in busy lives.
                </h3>
                <Button asChild className="bg-[#1e3d4c] hover:bg-[#2e4e5f] mt-2">
                  <Link to="/">
                    Explore the App <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Blog post not found</p>
            <Link to="/blogs" className="text-[#1e3d4c] hover:underline mt-4 inline-block">
              ← Back to all articles
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
