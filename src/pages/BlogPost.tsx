
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Card } from '@/components/ui/card';
import MarkdownContent from '@/components/MarkdownContent';

// Type for blog post data
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  content: string | null;
  cover_image_url: string | null;
  published_at: string | null;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Fetch blog post data from Supabase
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error('Blog post not found');
      
      return data as BlogPost;
    }
  });

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recent';
    
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch (e) {
      return 'Recent';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-houseboard-medium border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the article you're looking for.</p>
            <Button onClick={() => navigate('/blogs')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | HiveIn Journal</title>
        <meta name="description" content={post.summary || 'Read this article from HiveIn Journal'} />
        {post.cover_image_url && (
          <meta property="og:image" content={post.cover_image_url} />
        )}
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Back to blogs link */}
        <div className="container mx-auto px-4 mb-6">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-houseboard-medium hover:text-houseboard-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to all articles</span>
          </Link>
        </div>
        
        {/* Header section */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-houseboard-dark mb-4">
              {post.title}
            </h1>
            
            {post.summary && (
              <p className="text-lg text-gray-700 mb-4">
                {post.summary}
              </p>
            )}
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>By Team HiveIn</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.published_at)}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cover image */}
        {post.cover_image_url && (
          <div className="w-full max-w-4xl mx-auto mb-8 px-4">
            <img 
              src={post.cover_image_url} 
              alt={post.title} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        
        {/* Content */}
        <article className="py-8">
          <div className="container mx-auto px-4 max-w-2xl prose prose-pink prose-lg">
            <MarkdownContent content={post.content || ''} />
          </div>
        </article>
        
        {/* End CTA */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="p-6 bg-gradient-to-r from-pink-50 to-teal-50 border-houseboard-light">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2 text-houseboard-dark">
                  HiveIn is built for the quiet work of staying close.
                </h3>
                <p className="text-gray-700 mb-4">
                  Try it with your partner.
                </p>
                <Button asChild className="bg-houseboard-medium hover:bg-houseboard-dark">
                  <Link to="/">
                    Explore the App →
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
