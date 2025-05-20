
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Calendar } from 'lucide-react';
import { formatDistance } from 'date-fns';

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

const BlogIndex: React.FC = () => {
  // Fetch blog posts from Supabase
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recent';
    
    try {
      const date = new Date(dateString);
      return formatDistance(date, new Date(), { addSuffix: true });
    } catch (e) {
      return 'Recent';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>The HiveIn Journal - Ideas, rituals, and reflections for modern love</title>
        <meta name="description" content="Explore articles about building stronger relationships, daily love habits, and insights for modern couples." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-pink-50/30 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-houseboard-dark mb-4">The HiveIn Journal</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Ideas, rituals, and stories to help modern love thrive.
            </p>
          </div>
        </section>
        
        {/* Blog Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-houseboard-medium border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Loading articles...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-500">
                <p>Sorry, we couldn't load the articles. Please try again later.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts && blogPosts.length > 0 ? (
                  blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border-gray-200 bg-white/80 backdrop-blur-sm">
                      <Link to={`/blogs/${post.slug}`} className="block h-48 overflow-hidden">
                        <img 
                          src={post.cover_image_url || '/placeholder.svg'} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>
                        <Link to={`/blogs/${post.slug}`} className="block">
                          <h3 className="text-xl font-bold text-houseboard-dark hover:text-houseboard-medium transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                      </CardHeader>
                      
                      <CardContent className="pb-4 flex-grow">
                        <p className="text-gray-700 line-clamp-3">
                          {post.summary}
                        </p>
                      </CardContent>
                      
                      <CardFooter className="pt-0">
                        <Link 
                          to={`/blogs/${post.slug}`}
                          className="text-houseboard-medium hover:text-houseboard-dark transition-colors font-medium inline-flex items-center"
                        >
                          Read more →
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 text-gray-500">
                    <p>No articles found. Check back soon for new content!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;
