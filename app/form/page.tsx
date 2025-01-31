"use client"

import { FormProvider } from "@/contexts/form-context"
import { RoleSelector } from "@/components/role-selector"
import { CommonInfoForm } from "@/components/common-info-form"
import { BuyerForm } from "@/components/buyer-form"
import { SellerForm } from "@/components/seller-form"
import { useForm } from "@/contexts/form-context"

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
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="container max-w-2xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">Investment Form</h1>
                    <p className="text-gray-600">Please fill out the form below</p>
                </div>
                <FormProvider>
                    <FormStep />
                </FormProvider>
            </div>
        </div>
    )
}

