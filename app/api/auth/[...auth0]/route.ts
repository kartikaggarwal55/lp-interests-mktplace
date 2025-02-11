"use server";

import { handleAuth } from '@auth0/nextjs-auth0';

// Update type for route params:
// Changed from `auth0?: string[]` to `auth0: string[]` so that the parameter is always provided.
interface Params {
  auth0: string[]; // <-- Changed: removed the optional operator "?"
}

// Async GET handler to await and pass dynamic params
export async function GET(
  request: Request,
  { params }: { params: Params } // Using updated type
) {
  // Explicitly await the params to satisfy Next.js requirements (this is a no-op here, but ensures consistency)
  const awaitedParams = await Promise.resolve(params);
  return handleAuth()(request, { params: awaitedParams });
}

// Async POST handler to await and pass dynamic params
export async function POST(
  request: Request,
  { params }: { params: Params } // Using updated type
) {
  const awaitedParams = await Promise.resolve(params);
  return handleAuth()(request, { params: awaitedParams });
}
