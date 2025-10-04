import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { OrganizationSchema } from '@/components/StructuredData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Artikel niet gevonden',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIRA',
      url: 'https://aira-ai.nl',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aira-ai.nl/blog/${post.slug}`,
    },
  };

  return (
    <>
      <OrganizationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-slate-950 text-white">
        <div className="border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link 
              href="/blog"
              className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium mb-6">
            {post.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('nl-NL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} minuten leestijd</span>
            </div>
          </div>

          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-slate-300 prose-ul:my-6
              prose-li:mb-2
              prose-code:text-blue-400 prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Klaar om jouw organisatie AI-ready te maken?
            </h3>
            <p className="text-slate-300 mb-6">
              Ontdek hoe AIRA jouw team kan helpen met praktische AI-training en implementatiebegeleiding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                Bekijk onze pakketten
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
              >
                Meer over AIRA
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
