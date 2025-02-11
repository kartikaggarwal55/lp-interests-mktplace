"use client"; // Marks this as a client component

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client"; // Auth0 hook for user state
import { useRouter } from "next/navigation"; // Next.js App Router's useRouter
import { FormProvider, useForm } from "@/contexts/form-context";
import { RoleSelector } from "@/components/role-selector";
import { CommonInfoForm } from "@/components/common-info-form";
import { BuyerForm } from "@/components/buyer-form";
import { SellerForm } from "@/components/seller-form";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import LogoutButton from "@/components/logout-button"; // Import the LogoutButton component

// Component to determine which form step to render
function FormStep() {
    const { step, role } = useForm();

    switch (step) {
        case 0:
            return <RoleSelector />;
        case 1:
            return <CommonInfoForm />;
        case 2:
            return role === "buyer" ? <BuyerForm /> : <SellerForm />;
        default:
            return null;
    }
}

export default function FormPage() {
    const { user, isLoading } = useUser(); // Get the authentication state
    const router = useRouter();

    // Protect the form page: If not authenticated, redirect to Auth0 login.
    // Including prompt=select_account attempts to force Google to display the account chooser.
    useEffect(() => {
        if (!isLoading && !user) {
            router.push(
                "/api/auth/login?connection=google-oauth2&prompt=select_account&returnTo=/form"
            );
        }
    }, [user, isLoading, router]);

    // ----------------------------------------------------------------
    // Improved Loading State using a Flowbite spinner component
    // ----------------------------------------------------------------
    if (isLoading || !user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                {/* Spinner Component */}
                <div role="status" className="mb-4">
                    <svg
                        aria-hidden="true"
                        className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-darkGreenAccent"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                <p className="text-lg text-gray-700">Loading, please wait...</p>
            </div>
        );
    }
    // ----------------------------------------------------------------

    // Define the list of allowed email addresses
    const whitelistedEmails: string[] = [
        "aggarwalkartik55@gmail.com",
        "ari@sisu.site"
        // Add more allowed emails as needed
    ];

    // Check if the authenticated user's email is in the whitelist
    if (!user?.email || !whitelistedEmails.includes(user.email)) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
                <p className="mt-4 text-lg">
                    Your email address (<strong>{user?.email || "unknown"}</strong>) is not authorized to access this form.
                </p>
                {/* Render the LogoutButton to allow the user to sign out */}
                <div className="mt-6">
                    <LogoutButton />
                </div>
            </div>
        );
    }

    // If the user is authenticated and whitelisted, render the form page content.
    return (
        <div className="min-h-screen bg-gradient-to-br from-primaryGreen/40 to-softGreenBackground py-10 px-4 relative">
            <div className="flex flex-row absolute top-5 right-9 gap-2">
                <LogoutButton />
                <Link href="/">
                    <Button
                        variant="default"
                        size="sm"
                        className="rounded-full bg-black p-4 px-6 hover:shadow-sm active:shadow-md gap-3"
                    >
                        <Home className="h-4 w-4" />
                        Home
                    </Button>
                </Link>
            </div>

            <div className="container max-w-2xl mx-auto space-y-2">
                <div className="relative">
                    <h1 className="text-3xl font-bold text-green-800 text-center">
                        Application Form
                    </h1>
                    <p className="p-4 text-center">
                        We enforce a strict vetting process for both GPs and LPs to ensure a secure and trustworthy marketplace.
                    </p>
                </div>
                <FormProvider>
                    <FormStep />
                </FormProvider>
            </div>
        </div>
    );
}
