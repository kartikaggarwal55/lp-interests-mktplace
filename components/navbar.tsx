"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"


export function Navbar() {
    return (
        <nav className="mt-2">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-black">
                        <span className="size-2 rounded-full bg-black" />
                        Dots
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-md text-black hover:text-gray-700 font-medium">
                            Features
                        </Link>
                        <Link href="#stats" className="text-md text-black hover:text-gray-700 font-medium">
                            Our Stats
                        </Link>
                        <Link href="#company" className="text-md text-black hover:text-gray-700 font-medium">
                            Company
                        </Link>
                    </div>

                    {/* Right side button */}
                    <Link href="/form">
                        <Button variant="default" size="sm" className="rounded-3xl bg-black text-white p-4 hover:shadow-sm">
                            Buy/Sell Assets
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}


