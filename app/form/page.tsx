"use client"; // Marks this as a client component

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client"; // Auth0 hook for user state
import { useRouter, useSearchParams } from "next/navigation"; // <-- Added useSearchParams
import { FormProvider, useForm } from "@/contexts/form-context";
import { CommonInfoForm } from "@/components/common-info-form";
import { BuyerForm } from "@/components/buyer-form";
import { SellerForm } from "@/components/seller-form";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import LogoutButton from "@/components/logout-button";

// Updated FormStep: Remove the role selector step (case 0)
export function FormStep() {
    const { step, role } = useForm();

    switch (step) {
        case 1:
            return <CommonInfoForm />;
        case 2:
            return role === "buyer" ? <BuyerForm /> : <SellerForm />;
        default:
            return null;
    }
}

// A nested component to update form context based on the query parameter
function FormContent() {
    const searchParams = useSearchParams();  // <-- Get URL query parameters
    const queryRole = searchParams.get("role");  // <-- Retrieve the role from the URL
    const { role, setRole, setStep } = useForm();

    useEffect(() => {
        // If a valid role is provided in the URL and not yet set in context, update the context.
        if (queryRole && (queryRole === "buyer" || queryRole === "seller") && !role) {
            setRole(queryRole as "buyer" | "seller");  // <-- Update the role in context
            setStep(1);  // <-- Start the form at step 1 (CommonInfoForm)
        }
    }, [queryRole, role, setRole, setStep]);

    return <FormStep />;
}

export default function FormPage() {
    const { user, isLoading } = useUser();
    const router = useRouter();

    // Protect the form page: If not authenticated, redirect to Auth0 login.
    useEffect(() => {
        if (!isLoading && !user) {
            router.push(
                "/api/auth/login?connection=google-oauth2&prompt=select_account&returnTo=/form"
            );
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                {/* Spinner component omitted for brevity */}
                <p className="text-lg text-gray-700">Loading, please wait...</p>
            </div>
        );
    }

    // (Assuming any whitelist checks remain here)

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
                    <FormContent /> {/* <-- This component reads the URL and updates the context */}
                </FormProvider>
            </div>
        </div>
    );
}
