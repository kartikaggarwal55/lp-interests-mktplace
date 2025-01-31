"use client"
import { Card } from "@/components/ui/card"
import { useForm } from "@/contexts/form-context"
import { UserIcon, BuildingIcon } from "lucide-react"

export function RoleSelector() {
    const { setRole, setStep } = useForm()

    const handleRoleSelect = (role: "buyer" | "seller") => {
        setRole(role)
        setStep(1)
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
                    <p className="text-muted-foreground">Looking to sell fund positions</p>
                </div>
            </Card>
        </div>
    )
}

