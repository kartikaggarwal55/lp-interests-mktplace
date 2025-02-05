import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Send, Users, FileCheck } from "lucide-react"

const steps = [
    {
        title: "Vetting Process",
        description: "We thoroughly vet all participants to ensure the integrity and security of our platform.",
        icon: Shield,
    },
    {
        title: "Publish Your Fund Interest",
        description: "Share your LP interest (buy/sell) with our network of qualified investors.",
        icon: Send,
    },
    {
        title: "Match with a Buyer or Seller",
        description: "Our advanced matching algorithm connects you with suitable counterparties.",
        icon: Users,
    },
    {
        title: "Complete the Transaction",
        description: "Finalize the deal with our secure and streamlined transaction process.",
        icon: FileCheck,
    },
]

export function HowItWorks() {
    return (
        <section className="py-16 bg-gradient-to-br from-softGreenBackground to-lightBackground">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-darkGray">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-none"
                        >
                            <CardHeader>
                                <div className="w-12 h-12 bg-primaryGreen rounded-full flex items-center justify-center mb-4">
                                    {<step.icon className="w-6 h-6 text-white" />}
                                </div>
                                <CardTitle className="text-xl font-semibold text-black">
                                    Step {index}: {step.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-darkGray">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

