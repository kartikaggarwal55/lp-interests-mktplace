// app/layout.js
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers"; // <-- Modified: Import the Providers component
import { FormProvider } from "@/contexts/form-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secure Marketplace for LP Interests",
  description:
    "Join our trusted marketplace by completing our secure application process. We ensure a safe environment for verified buyers and sellers.", // Changed: Updated description to be relevant to the product
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* can add suppressHydrationWarning */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers> {/* <-- Modified: Wrap the entire app with the Providers component */}
          <FormProvider>
            {children}
          </FormProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
