import matter from 'gray-matter';
import { marked } from 'marked';
import { readdir, readFile } from 'node:fs/promises';

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export async function getReview(slug): Promise<Review> {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = await marked(content);
  return { slug, title, date, image, body };
}

export async function getReviews(): Promise<Review[]> {
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews;
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir('./content/reviews');
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
}
