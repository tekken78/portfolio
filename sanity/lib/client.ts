import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true, // set false if you want fresh content every request
  apiVersion: '2025-09-28',
})

// Create a builder for images
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source: any) => builder.image(source);
