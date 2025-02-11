"use client"; // Mark this as a client component so hooks can be used

import { UserProvider } from '@auth0/nextjs-auth0/client'; // Import the Auth0 user provider

export function Providers({ children }) {
  return (
    <UserProvider> {/* Wrap children with Auth0's UserProvider */}
      {children}
    </UserProvider>
  );
}
