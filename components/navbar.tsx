"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "./Logo";


export function Navbar() {
    return (
        <nav className="mt-2">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-black">
                        <Logo />
                    </Link>

                    <div className="flex h-16 items-center justify-between gap-4">
                        <Link href="#get-started">
                            <Button variant="default" size="sm" className="rounded-3xl bg-black text-white p-4 hover:shadow-sm">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="#faq">
                            <Button variant="default" size="sm" className="rounded-3xl bg-black text-white p-4 hover:shadow-sm">
                                FAQ
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}


