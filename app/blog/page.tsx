import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { OrganizationSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Blog - AI Kennis & Inzichten',
  description: 'Praktische artikelen over AI-implementatie, readiness en training voor organisaties.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              AI Kennis & Inzichten
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Praktische artikelen over AI-implementatie, readiness en training voor organisaties
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('nl-NL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                  Lees artikel
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">
              Nog geen artikelen gepubliceerd. Check binnenkort terug!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
