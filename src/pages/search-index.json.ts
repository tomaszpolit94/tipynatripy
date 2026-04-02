import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [blog, tipy, loty, plany] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('tipy', ({ data }) => !data.draft),
    getCollection('loty', ({ data }) => !data.draft),
    getCollection('plany', ({ data }) => !data.draft),
  ]);

  const items = [
    ...blog.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      url: `/blog/${p.slug}/`,
      tags: p.data.tags,
      section: 'blog',
    })),
    ...tipy.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      url: `/tipy/${p.slug}/`,
      tags: p.data.tags,
      section: 'tipy',
    })),
    ...loty.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      url: `/loty/${p.slug}/`,
      tags: p.data.tags,
      section: 'loty',
    })),
    ...plany.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      url: `/plany/${p.slug}/`,
      tags: p.data.tags ?? [],
      section: 'plany',
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
};
