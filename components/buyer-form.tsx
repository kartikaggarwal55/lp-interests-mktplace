"use client"

import { useForm } from "@/contexts/form-context"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

type BuyerFormData = {
    availableCapital?: string
    investmentInterests?: string[]
    backgroundInfo?: string
    referralSource?: string
    fundsOfInterest?: string[]
    hasExistingInvestments?: boolean
    currentInvestments?: string
    capitalSources?: string[]
    otherCapitalSource?: string
    otherInvestmentInterest?: string
}

const CAPITAL_RANGES = ["< $100K", "$100K-$500K", "$500K-$1M", "$1M+"]

const INVESTMENT_TYPES = [
    "Venture Capital (VC)",
    "Private Equity (PE)",
    "Real Estate Funds",
    "Hedge Funds",
    "Infrastructure Funds",
    "Other",
]

const REFERRAL_SOURCES = ["AngelList", "LinkedIn", "Referral", "Social Media", "Other"]

const CAPITAL_SOURCES = ["Personal", "Institutional", "Family Office", "Other"]

const FUND_OPTIONS = [
    "Blackstone Capital Partners",
    "Apollo Investment Fund",
    "KKR North America Fund",
    "Carlyle Partners",
    "TPG Capital",
    "Warburg Pincus Private Equity",
    "Bain Capital Fund",
    "CVC Capital Partners",
    "Thoma Bravo Fund",
    "Vista Equity Partners",
    "Silver Lake Partners",
    "Advent International GPE",
    "Hellman & Friedman Capital",
    "EQT Fund Management",
    "General Atlantic",
    "Permira Capital",
    "Brookfield Capital Partners",
    "Leonard Green & Partners",
    "Ares Corporate Opportunities",
    "Providence Equity Partners",
    "Sequoia Capital",
    "General Catalyst",
    "Y Combinator",
    "Andreessen Horowitz",
    "Accel Partners",
    "Kleiner Perkins",
    "Benchmark Capital",
    "Index Ventures",
    "Lightspeed Venture Partners",
    "NEA",
]

export function BuyerForm() {
    const { formData, updateFormData, setStep } = useForm()
    const [open, setOpen] = useState(false)
    const [selectedFunds, setSelectedFunds] = useState<string[]>([])
    const { toast } = useToast()
    const router = useRouter() // Initialize useRouter

    const buyerFormData = formData as BuyerFormData

    const validateForm = (): boolean => {
        if (!buyerFormData.investmentInterests || buyerFormData.investmentInterests.length === 0) {
            alert("Please select at least one investment interest.")
            return false
        }
        if (!buyerFormData.capitalSources || buyerFormData.capitalSources.length === 0) {
            alert("Please select at least one capital source.")
            return false
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const submissionData = {
            ...buyerFormData,
            role: "buyer",
        }

        console.log("Submitting buyer data:", JSON.stringify({ data: [submissionData] }))

        const response = await fetch("https://sheetdb.io/api/v1/5wwksu1tbid5f", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: [submissionData] }),
        })

        if (response.ok) {
            toast({
                title: "Success",
                description: "Buyer form submitted successfully",
            })
            console.log("Buyer form submission successful:", submissionData)
            setTimeout(() => {
                router.push("/") // Redirect to the home page
            }, 1000) // Delay for toast visibility
        } else {
            toast({
                title: "Error",
                description: "Error submitting buyer form",
                variant: "destructive",
            })
            console.error("Error submitting buyer form:", submissionData)
        }
    }

    const toggleFundSelection = (fund: string) => {
        setSelectedFunds((prevFunds) => {
            if (prevFunds.includes(fund)) {
                return prevFunds.filter((f) => f !== fund)
            } else if (prevFunds.length < 5) {
                return [...prevFunds, fund]
            }
            return prevFunds
        })
    }

    return (
        <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Investment Details */}
                <div className="space-y-6">
                    <h3 className="font-medium text-lg">Investment Details</h3>
                    <div className="space-y-4">
                        {/* Available Capital */}
                        <div className="space-y-2">
                            <Label>Available Capital for Investment *</Label>
                            <Select
                                required
                                onValueChange={(value) => updateFormData({ availableCapital: value } as Partial<BuyerFormData>)}
                                value={buyerFormData.availableCapital}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                                <SelectContent>
                                    {CAPITAL_RANGES.map((range) => (
                                        <SelectItem key={range} value={range}>
                                            {range}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Investment Interests */}
                        <div className="space-y-2">
                            <Label>Investment Interests *</Label>
                            <div className="grid gap-2">
                                {INVESTMENT_TYPES.map((type) => (
                                    <div key={type} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={type}
                                            checked={buyerFormData.investmentInterests?.includes(type)}
                                            onCheckedChange={(checked) => {
                                                const updatedInterests = checked
                                                    ? [...(buyerFormData.investmentInterests || []), type]
                                                    : (buyerFormData.investmentInterests || []).filter((t) => t !== type)
                                                updateFormData({
                                                    investmentInterests: updatedInterests,
                                                    ...(type === "Other" && !checked ? { otherInvestmentInterest: "" } : {}),
                                                } as Partial<BuyerFormData>)
                                            }}
                                        />
                                        <Label htmlFor={type}>{type}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Other Investment Interest */}
                        {buyerFormData.investmentInterests?.includes("Other") && (
                            <div className="space-y-2">
                                <Label htmlFor="otherInvestmentInterest">Please specify other investment interest</Label>
                                <Input
                                    id="otherInvestmentInterest"
                                    value={buyerFormData.otherInvestmentInterest || ""}
                                    onChange={(e) =>
                                        updateFormData({ otherInvestmentInterest: e.target.value } as Partial<BuyerFormData>)
                                    }
                                />
                            </div>
                        )}

                        {/* Specific Funds of Interest */}
                        <div className="space-y-2">
                            <Label>Specific Funds of Interest (up to 5)</Label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                                        <div className="flex-1 truncate text-left">
                                            {selectedFunds.length > 0 ? selectedFunds.join(", ") : "Select or type fund name..."}
                                        </div>
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search fund..." />
                                        <CommandList>
                                            <CommandEmpty>No fund found.</CommandEmpty>
                                            <CommandGroup>
                                                {FUND_OPTIONS.map((fund) => (
                                                    <CommandItem
                                                        key={fund}
                                                        onSelect={() => {
                                                            toggleFundSelection(fund)
                                                            updateFormData({
                                                                fundsOfInterest: selectedFunds.includes(fund)
                                                                    ? selectedFunds.filter((f) => f !== fund)
                                                                    : [...selectedFunds, fund],
                                                            } as Partial<BuyerFormData>)
                                                            setOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn("mr-2 h-4 w-4", selectedFunds.includes(fund) ? "opacity-100" : "opacity-0")}
                                                        />
                                                        {fund}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>

                {/* Current Investment Portfolio */}
                <div className="space-y-6">
                    <h3 className="font-medium text-lg">Current Investment Portfolio</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Do you have existing interests in other funds? *</Label>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="hasExistingInvestments"
                                    checked={buyerFormData.hasExistingInvestments}
                                    onCheckedChange={(checked) => {
                                        updateFormData({
                                            hasExistingInvestments: checked as boolean,
                                            ...(!checked ? { currentInvestments: "" } : {}),
                                        } as Partial<BuyerFormData>)
                                    }}
                                />
                                <Label htmlFor="hasExistingInvestments">Yes</Label>
                            </div>
                        </div>

                        {buyerFormData.hasExistingInvestments && (
                            <div className="space-y-2">
                                <Label htmlFor="currentInvestments">List your current fund investments</Label>
                                <Textarea
                                    id="currentInvestments"
                                    placeholder="Please list your current fund investments..."
                                    value={buyerFormData.currentInvestments || ""}
                                    onChange={(e) => updateFormData({ currentInvestments: e.target.value } as Partial<BuyerFormData>)}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                    <h3 className="font-medium text-lg">Additional Information</h3>
                    <div className="space-y-4">
                        {/* Capital Sources */}
                        <div className="space-y-2">
                            <Label>Capital Sources *</Label>
                            <div className="grid gap-2">
                                {CAPITAL_SOURCES.map((source) => (
                                    <div key={source} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={source}
                                            checked={buyerFormData.capitalSources?.includes(source)}
                                            onCheckedChange={(checked) => {
                                                const updatedSources = checked
                                                    ? [...(buyerFormData.capitalSources || []), source]
                                                    : (buyerFormData.capitalSources || []).filter((s) => s !== source)
                                                updateFormData({
                                                    capitalSources: updatedSources,
                                                    ...(source === "Other" && !checked ? { otherCapitalSource: "" } : {}),
                                                } as Partial<BuyerFormData>)
                                            }}
                                        />
                                        <Label htmlFor={source}>{source}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Other Capital Source */}
                        {buyerFormData.capitalSources?.includes("Other") && (
                            <div className="space-y-2">
                                <Label htmlFor="otherCapitalSource">Please specify other source</Label>
                                <Input
                                    id="otherCapitalSource"
                                    value={buyerFormData.otherCapitalSource || ""}
                                    onChange={(e) => updateFormData({ otherCapitalSource: e.target.value } as Partial<BuyerFormData>)}
                                />
                            </div>
                        )}

                        {/* Background Information */}
                        <div className="space-y-2">
                            <Label htmlFor="backgroundInfo">Background Information</Label>
                            <Textarea
                                id="backgroundInfo"
                                placeholder="Share your investment philosophy and experience..."
                                value={buyerFormData.backgroundInfo || ""}
                                onChange={(e) => updateFormData({ backgroundInfo: e.target.value } as Partial<BuyerFormData>)}
                            />
                        </div>

                        {/* Referral Source */}
                        <div className="space-y-2">
                            <Label>How Did You Hear About Us? *</Label>
                            <Select
                                required
                                onValueChange={(value) => updateFormData({ referralSource: value } as Partial<BuyerFormData>)}
                                value={buyerFormData.referralSource}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select source" />
                                </SelectTrigger>
                                <SelectContent>
                                    {REFERRAL_SOURCES.map((source) => (
                                        <SelectItem key={source} value={source}>
                                            {source}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                        Back
                    </Button>
                    <Button
                        type="submit"
                        disabled={!buyerFormData.investmentInterests?.length || !buyerFormData.capitalSources?.length || !buyerFormData.referralSource}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Card>
    )
}

