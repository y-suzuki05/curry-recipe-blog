import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'curryrecipe',
  apiKey: process.env.API_KEY,
});