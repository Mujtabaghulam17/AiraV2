import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark()
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();

        // Bereken leestijd (200 woorden per minuut)
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          author: data.author || 'AIRA Team',
          category: data.category || 'AI Training',
          content: contentHtml,
          readTime,
        };
      })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
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
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author || 'AIRA Team',
    category: data.category || 'AI Training',
    content: contentHtml,
    readTime,
  };
}
