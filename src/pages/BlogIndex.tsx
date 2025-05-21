
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/dateUtils';

// Sample test blogs in case the database is empty or for testing layout
const testBlogs = [
  {
    id: '1',
    title: "Building Stronger Communication in Relationships",
    slug: "building-stronger-communication",
    summary: "Learn how to strengthen your relationship through effective and compassionate communication techniques.",
    published_at: new Date().toISOString(),
    cover_image_url: null
  },
  {
    id: '2',
    title: "The Power of Small Daily Rituals for Couples",
    slug: "power-of-daily-rituals",
    summary: "Discover how small, consistent rituals can create deeper connection and intimacy between partners.",
    published_at: new Date().toISOString(),
    cover_image_url: null
  },
  {
    id: '3',
    title: "Navigating Conflict in Healthy Relationships",
    slug: "navigating-conflict",
    summary: "Learn strategies for addressing and resolving conflicts that strengthen rather than weaken your bond.",
    published_at: new Date().toISOString(),
    cover_image_url: null
  },
  {
    id: '4',
    title: "The Art of Active Listening for Partners",
    slug: "art-of-active-listening",
    summary: "Master the skill of truly hearing your partner to foster understanding and emotional connection.",
    published_at: new Date().toISOString(),
    cover_image_url: null
  },
  {
    id: '5',
    title: "Test Blog Title 2",
    slug: "test-blog-title-2",
    summary: "This is a test blog about nurturing emotional intelligence in relationships and how it can transform your connection.",
    published_at: new Date().toISOString(),
    cover_image_url: null
  },
  {
    id: '6',
    title: "Test Blog Title 3",
    slug: "test-blog-title-3",
    summary: "This test post explores how quality time spent together can be the most important factor in relationship satisfaction.",
    published_at: new Date().toISOString(),
    cover_image_url: null
  }
];

const BlogIndex = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      // If no blogs in database, use test blogs
      return data?.length > 0 ? data : testBlogs;
    }
  });

  return (
    <div className="bg-white min-h-screen">
      <HelmetProvider>
        <Helmet>
          <title>The HiveIn Journal - Ideas and Rituals for Modern Love</title>
          <meta name="description" content="Ideas, rituals, and stories to help modern love thrive. Discover expert relationship advice and practical tips for couples." />
          <meta name="keywords" content="relationship advice, couples blog, relationship tips, love advice, HiveIn journal, relationship habits" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hivein.app/blogs" />
          <meta property="og:title" content="The HiveIn Journal - Ideas and Rituals for Modern Love" />
          <meta property="og:description" content="Ideas, rituals, and stories to help modern love thrive. Discover expert relationship advice and practical tips for couples." />
          <meta property="og:image" content="https://hivein.app/lovable-uploads/house.png" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://hivein.app/blogs" />
          <meta property="twitter:title" content="The HiveIn Journal - Ideas and Rituals for Modern Love" />
          <meta property="twitter:description" content="Ideas, rituals, and stories to help modern love thrive. Discover expert relationship advice and practical tips for couples." />
          <meta property="twitter:image" content="https://hivein.app/lovable-uploads/house.png" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://hivein.app/blogs" />
        </Helmet>
      </HelmetProvider>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1e3d4c] mb-4">
            The HiveIn Journal
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Ideas, rituals, and stories to help modern love thrive.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading articles...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading articles. Please try again later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs && blogs.map((blog) => (
                <Link 
                  to={`/blogs/${blog.slug}`} 
                  key={blog.id} 
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#1e3d4c] border border-gray-700 h-full flex flex-col">
                    <div className="aspect-[16/9] bg-gray-800 overflow-hidden">
                      {blog.cover_image_url ? (
                        <img 
                          src={blog.cover_image_url} 
                          alt={`Cover image for ${blog.title}`} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white flex items-center justify-center border border-gray-200">
                          <span className="text-gray-400 text-xl font-serif">HiveIn Journal</span></div>

                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 font-serif line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-3 text-sm line-clamp-2 flex-grow">
                        {blog.summary}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-gray-400">
                          {blog.published_at && formatDate(new Date(blog.published_at))}
                        </span>
                        
                        <span className="text-gray-400 text-sm inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          Read more <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
