"use client"

import { useRouter } from "next/navigation"  // <-- Import useRouter for redirection
import { Card } from "@/components/ui/card"
import { UserIcon, BuildingIcon } from "lucide-react"

export function RoleSelector() {
    const router = useRouter()

    const handleRoleSelect = (role: "buyer" | "seller") => {
        // Instead of directly setting context here, redirect to the form page with the role in the query string.
        router.push(`/form?role=${role}`)  // <-- Change: use query parameter for role
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-green-600" onClick={() => handleRoleSelect("buyer")}>
                <div className="text-center space-y-4">
                    <UserIcon className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">I&apos;m a Buyer</h3>
                    <p className="text-muted-foreground">Looking to invest in funds</p>
                </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-green-600" onClick={() => handleRoleSelect("seller")}>
                <div className="text-center space-y-4">
                    <BuildingIcon className="w-12 h-12 mx-auto text-primary" />
                    <h3 className="text-xl font-semibold">I&apos;m a Seller</h3>
                    <p className="text-muted-foreground">Looking to sell LP positions</p>
                </div>
            </Card>
        </div>
    )
}
