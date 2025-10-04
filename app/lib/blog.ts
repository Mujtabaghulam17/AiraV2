// app/lib/blog.ts - FIXED VERSION for Vercel deployment

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Use process.cwd() to get the correct path in production
const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  category: string;
  content: string;
  readTime: number;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Log for debugging
  console.log('Posts directory:', postsDirectory);
  
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Blog directory does not exist:', postsDirectory);
    
    // Try alternative path
    const altPath = path.join(process.cwd(), 'app', 'content', 'blog');
    if (fs.existsSync(altPath)) {
      console.log('Using alternative path:', altPath);
      return getAllPostsFromDirectory(altPath);
    }
    
    return [];
  }

  return getAllPostsFromDirectory(postsDirectory);
}

async function getAllPostsFromDirectory(directory: string): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(directory);
  
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark()
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();

        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString().split('T')[0],
          description: data.description || '',
          author: data.author || 'AIRA Team',
          category: data.category || 'AI Training',
          content: contentHtml,
          readTime,
        };
      })
  );

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  let fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // Check if file exists, try alternative path if not
  if (!fs.existsSync(fullPath)) {
    const altPath = path.join(process.cwd(), 'app', 'content', 'blog', `${slug}.md`);
    if (fs.existsSync(altPath)) {
      fullPath = altPath;
    } else {
      console.warn('Blog post not found:', slug);
      return null;
    }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString().split('T')[0],
    description: data.description || '',
    author: data.author || 'AIRA Team',
    category: data.category || 'AI Training',
    content: contentHtml,
    readTime,
  };
}
