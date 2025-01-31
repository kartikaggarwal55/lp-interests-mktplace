import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-16 pb-16 px-4 overflow-hidden">
            <div className="absolute inset-x-4 top-4 bottom-4 md:inset-x-8 md:top-8 md:bottom-8">
                {/* Gradient background with rounded corners */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white to-green-50/90 rounded-3xl" />

                {/* Radial gradient overlay with rounded corners */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,255,220,0.4)_0%,transparent_60%)] rounded-3xl" />
            </div>

            <div className="container mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2">
                            <span className="text-green-600 text-sm">4.9 (6k+ Reviews)</span>
                            <span className="text-gray-400">by Trustpilot</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Simplify management and payments from a single platform
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Meet the new standard for a modern card platform. Launch your product, issue cards, and grow your revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-12">
                                Open An Account
                            </Button>
                            <Button size="lg" variant="outline" className="h-12">
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Watch Demo
                            </Button>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                Fast acceptance
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[600px]">
                        <Image
                            src={`https://picsum.photos/600/300`}
                            alt="Dashboard Preview"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

