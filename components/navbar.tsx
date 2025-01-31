"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold">
                        <span className="size-2 rounded-full bg-black" />
                        Dots
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm hover:text-gray-600">
                            Features
                        </Link>
                        <Link href="#stats" className="text-sm hover:text-gray-600">
                            Our Stats
                        </Link>
                        <Link href="#company" className="text-sm hover:text-gray-600">
                            Company
                        </Link>
                    </div>

                    {/* Right side buttons */}
                    <Link href="/form">
                        <Button variant="default" size="sm" className="rounded-full bg-black p-4">
                            Buy/Sell Assets
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

