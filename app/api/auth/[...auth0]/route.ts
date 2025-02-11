"use server";

import { handleAuth } from '@auth0/nextjs-auth0';

// Define the type for the route params (adjust as needed)
interface Params {
  auth0?: string[];
}

// Async GET handler to await and pass dynamic params
export async function GET(
  request: Request,
  { params }: { params: Params }
) {
  // Explicitly await the params to satisfy Next.js requirements
  const awaitedParams = await Promise.resolve(params);
  return handleAuth()(request, { params: awaitedParams });
}

// Async POST handler to await and pass dynamic params
export async function POST(
  request: Request,
  { params }: { params: Params }
) {
  const awaitedParams = await Promise.resolve(params);
  return handleAuth()(request, { params: awaitedParams });
}
