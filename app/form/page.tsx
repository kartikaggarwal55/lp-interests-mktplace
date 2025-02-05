"use client"

import { FormProvider } from "@/contexts/form-context"
import { RoleSelector } from "@/components/role-selector"
import { CommonInfoForm } from "@/components/common-info-form"
import { BuyerForm } from "@/components/buyer-form"
import { SellerForm } from "@/components/seller-form"
import { useForm } from "@/contexts/form-context"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

function FormStep() {
    const { step, role } = useForm()

    switch (step) {
        case 0:
            return <RoleSelector />
        case 1:
            return <CommonInfoForm />
        case 2:
            return role === "buyer" ? <BuyerForm /> : <SellerForm />
        default:
            return null
    }
}

export default function FormPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primaryGreen/40 to-softGreenBackground py-10 px-4 relative">
            <Link href="/">
                <Button variant="default" size="sm" className="rounded-full bg-black p-4 px-6 absolute top-6 right-10 hover:shadow-sm active:shadow-md gap-3">
                    <Home className="h-4 w-4" />
                    Home
                </Button>
            </Link>
            <div className="container max-w-2xl mx-auto space-y-2">
                <div className="relative">
                    <h1 className="text-3xl font-bold text-green-800 text-center">Application Form</h1>
                    <p className="p-4 text-center">We enforce a strict vetting process for both GPs and LPs to ensure a secure and trustworthy marketplace.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
                    <p className="text-gray-600 text-center">Please fill out the form below</p>
                    <FormProvider>
                        <FormStep />
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}
