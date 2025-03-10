"use client"; // Marks this as a client component

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client"; // Auth0 hook for user state
import { useRouter } from "next/navigation"; // For redirection
import { useForm } from "@/contexts/form-context"; // Use the form context
import { CommonInfoForm } from "@/components/common-info-form";
import { BuyerForm } from "@/components/buyer-form";
import { SellerForm } from "@/components/seller-form";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import LogoutButton from "@/components/logout-button";
import Logo from "@/components/Logo";

function FormStep() {
    const { step, role } = useForm();


    // If no role has been set (e.g. user navigated here directly), you can show a message
    if (!role) {
        return <div className="text-center p-4">Please select a role on the home page.</div>;
    }

    switch (step) {
        case 1:
            return <CommonInfoForm />;
        case 2:
            return role === "buyer" ? <BuyerForm /> : <SellerForm />;
        default:
            return null;
    }
}

export default function FormPage() {
    const { user, isLoading } = useUser();
    const router = useRouter();

    const { role, setRole, setStep } = useForm();


    useEffect(() => {
        // Retrieve role from localStorage if not already set
        const storedRole = localStorage.getItem("selectedRole");
        if (!role && storedRole) {
            setRole(storedRole as "buyer" | "seller");
            setStep(1);
        }
    }, [role, setRole, setStep]);


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
                <div className="animate-spin inline-block size-11 border-[4px] border-current border-t-transparent text-darkGreenAccent rounded-full dark:text-darkGreenAccent" role="status" aria-label="loading">
                </div>
                <p className="text-lg text-gray-700 py-3">Loading...</p>
            </div>
        );
    }

    // Define your whitelist of allowed emails.
    const whitelistedEmails: string[] = [
        "aggarwalkartik55@gmail.com",
        "ari@sisu.site",
        "ilisha.aggarwal30@gmail.com"
        // Add more allowed emails as needed
    ];

    // Check if the authenticated user's email is in the whitelist.
    if (!user?.email || !whitelistedEmails.includes(user.email)) {
        return (
            <div className="min-h-screen bg-gray-50 px-4 flex flex-col">
                <header className="flex items-center justify-between p-5 py-6"> {/* Changed: Added header flex container */}
                    <Link href="/" className="flex items-center font-bold text-black">
                        <Logo /> {/* Changed: Added logo */}
                    </Link>
                    <div className="flex gap-2">
                        <Link href="/">
                            <Button
                                size="sm"
                                className="rounded-outlinep-3 hover:shadow-sm active:shadow-md gap-3"
                            >
                                <Home className="h-4 w-4" />
                            </Button>
                        </Link>
                        <LogoutButton />
                    </div>
                </header>
                <main className="flex flex-col items-center justify-center flex-1">
                    <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
                    <p className="mt-4 text-lg text-center">
                        Your email address (<strong>{user?.email || "unknown"}</strong>) is not authorized to access this form.
                    </p>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primaryGreen/40 to-softGreenBackground px-4 py-6">
            <header className="flex items-center justify-between px-5"> {/* Changed: Added header flex container */}
                <Link href="/" className="flex items-center font-bold text-black">
                    <Logo /> {/* Changed: Added logo */}
                </Link>
                <div className="flex gap-2">
                    <Link href="/">
                        <Button
                            size="sm"
                            className="rounded-outlinep-3 hover:shadow-sm active:shadow-md gap-3"
                        >
                            <Home className="h-4 w-4" />
                        </Button>
                    </Link>
                    <LogoutButton />
                </div>
            </header>
            <main className="container max-w-2xl mx-auto space-y-2">
                <div className="relative">
                    <h1 className="text-3xl font-bold text-green-800 text-center">
                        Application Form
                    </h1>
                    <p className="p-4 text-center">
                        We enforce a strict vetting process for both GPs and LPs to ensure a secure and trustworthy marketplace.
                    </p>
                </div>
                <FormStep />
            </main>
        </div>
    );
}
