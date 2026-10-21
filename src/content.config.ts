import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    number: z.string(),
    outcomeHeadline: z.string(),
    oneLiner: z.string(),
    category: z.enum(['Delivery', 'Client onboarding', 'Team leadership']),
    clientGeneric: z.string(),
    role: z.string(),
    team: z.string(),
    tools: z.array(z.string()),
    timeline: z.string(),
    results: z.array(
      z.object({
        metric: z.string(),
        label: z.string(),
      })
    ),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    order: z.number(),
    period: z.string(),
    role: z.string(),
    company: z.string(),
    location: z.string(),
    bullets: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    authorGeneric: z.string(),
    region: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  experience,
  testimonials,
  posts,
};
