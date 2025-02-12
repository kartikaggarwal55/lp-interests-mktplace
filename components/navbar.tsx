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


                    <div className="flex flex-row gap-4 items-center">
                        <Link href="/form">
                            <Button variant="default" size="sm" className="rounded-3xl bg-black text-white p-4 hover:shadow-sm">
                                Get Started
                            </Button>

                        </Link>
                        <Link href="#faq" className="text-md text-black hover:text-gray-700 font-medium">
                            FAQ
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}


