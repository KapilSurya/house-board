
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/dateUtils';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error("Blog post not found");
      return data;
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
          <blockquote key={i} className="border-l-4 border-[#d6336c] pl-4 py-2 my-6 bg-pink-50/50 italic">
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
            <Link to="/blogs" className="text-[#d6336c] hover:underline mt-4 inline-block">
              ← Back to all articles
            </Link>
          </div>
        ) : post ? (
          <>
            {/* Header */}
            <div className="container mx-auto px-4 text-center mb-8 max-w-3xl">
              <Link to="/blogs" className="text-[#d6336c] hover:underline mb-6 inline-block">
                ← Back to all articles
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
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

            {/* Cover image */}
            <div className="w-full mb-12">
              {post.cover_image_url ? (
                <img 
                  src={post.cover_image_url} 
                  alt={post.title}
                  className="w-full max-h-[500px] object-cover" 
                />
              ) : (
                <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center">
                  <span className="text-[#d6336c]/30 text-2xl font-serif">HiveIn Journal</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 max-w-[720px]">
              <article className="prose prose-lg max-w-none font-serif">
                {renderContent()}
              </article>
              
              {/* CTA */}
              <div className="mt-16 mb-8 p-6 bg-pink-50 rounded-lg border border-pink-100 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-3">
                  HiveIn is designed to help couples stay emotionally close, even in busy lives.
                </h3>
                <Button asChild className="bg-[#d6336c] hover:bg-[#c62b60] mt-2">
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
            <Link to="/blogs" className="text-[#d6336c] hover:underline mt-4 inline-block">
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
