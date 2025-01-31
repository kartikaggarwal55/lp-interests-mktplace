"use client"

export function Stats() {
    return (
        <section className="py-24">
            <div className="container mx-auto">
                {/* Header with Circle and Text */}
                <div className="flex items-start gap-4 mb-16">
                    <div className="size-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <div className="size-4 rounded-full bg-green-600" />
                    </div>
                    <h2 className="text-2xl font-medium leading-tight">
                        Market insights from our<br />
                        growing community of<br />
                        institutional investors
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Average Available Capital */}
                    <div className="space-y-3">
                        <h3 className="text-4xl font-bold">$500K</h3>
                        <p className="text-gray-500">Average Available Capital</p>
                        <p className="text-sm text-gray-400">per buyer</p>
                    </div>

                    {/* Total Interested Buyers */}
                    <div className="space-y-3">
                        <h3 className="text-4xl font-bold">1,200</h3>
                        <p className="text-gray-500">Active Buyers</p>
                        <p className="text-sm text-gray-400">and growing daily</p>
                    </div>

                    {/* Popular Fund Types */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Most Popular Funds</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="h-2 bg-green-600 rounded-full w-[60%]" />
                                <span className="text-sm text-gray-500">VC 60%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 bg-green-400 rounded-full w-[25%]" />
                                <span className="text-sm text-gray-500">PE 25%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 bg-green-200 rounded-full w-[15%]" />
                                <span className="text-sm text-gray-500">Real Estate 15%</span>
                            </div>
                        </div>
                    </div>

                    {/* Top Interest Funds */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Highest Interest</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">Fund A</span>
                                    <span className="text-sm text-gray-500">300 buyers</span>
                                </div>
                                <div className="h-2 bg-green-600 rounded-full w-full" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">Fund B</span>
                                    <span className="text-sm text-gray-500">200 buyers</span>
                                </div>
                                <div className="h-2 bg-green-400 rounded-full w-[66%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

