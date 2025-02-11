"use server";

import { handleAuth } from '@auth0/nextjs-auth0';

// Define the type for the route params (remains the same)
interface Params {
  auth0: string[];
}

// Updated GET handler:
// Changed the type of the second argument from { params: Params } to { params: Promise<Params> }
// and now await params directly.
export async function GET(
  request: Request,
  { params }: { params: Promise<Params> } // <-- Changed: wrap params in a Promise
) {
  // Await the params before using them
  const awaitedParams = await params; // <-- Changed: directly await params
  return handleAuth()(request, { params: awaitedParams });
}

// Updated POST handler with the same changes
export async function POST(
  request: Request,
  { params }: { params: Promise<Params> } // <-- Changed: wrap params in a Promise
) {
  const awaitedParams = await params; // <-- Changed: directly await params
  return handleAuth()(request, { params: awaitedParams });
}
