import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: ({ image }) => {
    return z.object({
      title: z.string(),
      client: z.string(),
      typeOfProject: z.string(),
      introText: z.string(),
      projectColor: z.string(),
      year: z.string(),
      linkToWebsite: z.string(),
      mainImage: image(),
      otherImages: z.array(image()),
      tasks: z.array(z.string()),
      tags: z.array(z.string()),
      order: z.number(),
    });
  },
});

export const collections = {
  projects: projectCollection,
};