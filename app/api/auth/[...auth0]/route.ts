"use server";

import { handleAuth } from '@auth0/nextjs-auth0';

interface Params {
  auth0: string[];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> } // <-- Params now wrapped in Promise
) {
  try {
    // Await the dynamic parameters
    const awaitedParams = await params; // <-- Await the params
    return handleAuth()(request, { params: awaitedParams });
  } catch (error) {
    // Log the error so you can see details in Vercel logs
    console.error("Error in GET auth route:", error); // <-- Added error logging
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<Params> } // <-- Params now wrapped in Promise
) {
  try {
    const awaitedParams = await params; // <-- Await the params
    return handleAuth()(request, { params: awaitedParams });
  } catch (error) {
    console.error("Error in POST auth route:", error); // <-- Added error logging
    return new Response("Internal Server Error", { status: 500 });
  }
}
