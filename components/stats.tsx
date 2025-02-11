"use client";

export function Stats() {
    return (
        // Updated section with a light background for contrast
        <section id="stats" className="py-24 bg-gradient-to-b from-white to-softGreenBackground">
            <div className="container mx-auto px-4">

                {/* Revamped Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Market Insights
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Data-driven insights from our community of institutional investors.
                    </p>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1: Average Available Capital */}
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <h3 className="text-4xl font-bold text-green-600">$500K</h3>
                        <p className="mt-2 text-gray-500">Avg. Available Capital per Buyer</p>
                    </div>

                    {/* Card 2: Active Buyers */}
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <h3 className="text-4xl font-bold text-green-600">1,200</h3>
                        <p className="mt-2 text-gray-500">Active Buyers</p>
                    </div>

                    {/* Card 3: Deal Closure Rate (added extra metric for variety) */}
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <h3 className="text-4xl font-bold text-green-600">85%</h3>
                        <p className="mt-2 text-gray-500">Deal Closure Rate</p>
                    </div>
                </div>

                {/* Revamped Popular Fund Types */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Popular Fund Types</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* VC Fund */}
                        <div className="flex-1 bg-white shadow rounded-lg p-4">
                            <div className="h-3 bg-green-600 rounded-full w-3/4 mb-2"></div>
                            <p className="text-sm text-gray-500">VC - 60%</p>
                        </div>
                        {/* PE Fund */}
                        <div className="flex-1 bg-white shadow rounded-lg p-4">
                            <div className="h-3 bg-green-400 rounded-full w-1/3 mb-2"></div>
                            <p className="text-sm text-gray-500">PE - 25%</p>
                        </div>
                        {/* Real Estate Fund */}
                        <div className="flex-1 bg-white shadow rounded-lg p-4">
                            <div className="h-3 bg-green-200 rounded-full w-1/5 mb-2"></div>
                            <p className="text-sm text-gray-500">Real Estate - 15%</p>
                        </div>
                    </div>
                </div>

                {/* New Fund Activity Table */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Fund Activity</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow rounded-sm">
                            <thead  >
                                <tr>
                                    {/* Fund Logo Column */}
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                                        Fund Logo
                                    </th>
                                    {/* Buy Interest Column */}
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                                        Buy Interest
                                    </th>
                                    {/* Sell Interest Column */}
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">
                                        Sell Interest
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Fund Row 1 */}
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        {/* Placeholder for Fund A logo */}
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-xs text-gray-700">Fund A</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span className="text-lg font-bold text-green-600">45%</span>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span className="text-lg font-bold text-red-600">30%</span>
                                    </td>
                                </tr>

                                {/* Fund Row 2 */}
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        {/* Placeholder for Fund B logo */}
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-xs text-gray-700">Fund B</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span className="text-lg font-bold text-green-600">55%</span>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span className="text-lg font-bold text-red-600">40%</span>
                                    </td>
                                </tr>

                                {/* Fund Row 3 */}
                                <tr className="hover:bg-gray-100">
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        {/* Placeholder for Fund C logo */}
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-xs text-gray-700">Fund C</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span className="text-lg font-bold text-green-600">35%</span>
                                    </td>
                                    <td className="px-6 py-4 border-b border-gray-200">
                                        <span className="text-lg font-bold text-red-600">50%</span>
                                    </td>
                                </tr>
                                {/* Additional rows can be added as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
