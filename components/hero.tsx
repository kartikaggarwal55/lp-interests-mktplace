import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
    return (
        <section className="text-center py-32 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-5">
                    Liquidity for Your Private Investments
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                    Buy & sell LP interests in top-tier VC and PE funds seamlessly.
                </p>
                <Link href="/form">
                    <div className="mb-12">
                        <Button className="bg-black text-white px-8 py-4 rounded-3xl hover:shadow-sm active:shadow-md">
                            Get Started
                        </Button>
                    </div>
                </Link>
            </div>
        </section >
    )
}
