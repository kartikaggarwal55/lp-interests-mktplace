"use client"

import { useForm } from "@/contexts/form-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import type React from "react" // Added import for React

export function CommonInfoForm() {
    const { formData, updateFormData, setStep } = useForm()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
    }

    return (
        <Card className="p-6">
            <h3 className="font-medium text-lg mb-5">Personal Information</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                        id="fullName"
                        required
                        value={formData.fullName || ""}
                        onChange={(e) => updateFormData({ fullName: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={formData.email || ""}
                        onChange={(e) => updateFormData({ email: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        value={formData.phone || ""}
                        onChange={(e) => updateFormData({ phone: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile URL *</Label>
                    <Input
                        id="linkedin"
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/username"
                        pattern="^https?://(www\.)?linkedin\.com/in/[\w-]+$"
                        title="Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)"
                        value={formData.linkedinUrl || ""}
                        onChange={(e) => updateFormData({ linkedinUrl: e.target.value })}
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" className="hover:shadow-sm active:shadow-md" onClick={() => setStep(0)}>
                        Back
                    </Button>
                    <Button type="submit">Continue</Button>
                </div>
            </form>
        </Card>
    )
}

