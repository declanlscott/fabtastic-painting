import { defineCollection, z } from "astro:content";

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    content: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  testimonials,
};
