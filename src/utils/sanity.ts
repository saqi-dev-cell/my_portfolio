import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'hqdr35bh', // Replace with your Sanity project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2023-01-01',     // Use current date or your API version
  useCdn: true,
})