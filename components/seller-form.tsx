"use client"

import { useForm } from "@/contexts/form-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type React from "react"
import type { SellerFormData } from "@/types/form"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"


const VINTAGE_YEARS = Array.from({ length: 25 }, (_, i) => (2000 + i).toString())
const SALE_PERCENTAGES = ["1%-10%", "11%-25%", "26%-50%", "51%-100%"]
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

export function SellerForm() {
  const { formData, updateFormData, setStep } = useForm()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const { toast } = useToast()
  const router = useRouter() // Initialize useRouter


  const sellerFormData = formData as SellerFormData

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const submissionData = {
      ...sellerFormData,
      role: "seller",
    }

    console.log("Submitting seller data:", JSON.stringify({ data: [submissionData] }))

    const response = await fetch("https://sheetdb.io/api/v1/d2w3k9rhwnd9e", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [submissionData] }),
    })

    if (response.ok) {
      toast({
        title: "Success",
        description: "Seller form submitted successfully",

      })
      console.log("Seller form submission successful:", submissionData)
      setTimeout(() => {
        router.push("/") // Redirect to the home page
      }, 1000) // Delay for toast visibility
    } else {
      toast({
        title: "Error",
        description: "Error submitting seller form",
        variant: "destructive",
      })
      console.error("Error submitting seller form:", submissionData)
    }
  }

  const isFormValid = () => {
    return (
      sellerFormData.fundName &&
      sellerFormData.vintageYear &&
      sellerFormData.lpCommitmentAmount &&
      sellerFormData.lpInvestedAmount &&
      sellerFormData.salePercentage &&
      sellerFormData.expectedValue &&
      sellerFormData.fundManagerName &&
      sellerFormData.fundManagerEmail
    );
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Fund Information */}
        <div className="space-y-6">
          <h3 className="font-medium text-lg">Fund Information</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Fund Name *</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {value ? FUND_OPTIONS.find((fund) => fund === value) : "Select or type fund name..."}
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
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              updateFormData({
                                fundName: currentValue === value ? "" : currentValue,
                              } as Partial<SellerFormData>)
                              setOpen(false)
                            }}
                          >
                            <Check className={cn("mr-2 h-4 w-4", value === fund ? "opacity-100" : "opacity-0")} />
                            {fund}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label >Vintage Year *</Label>
              <p className="text-xs text-gray-500">Specific Entity</p>
              <Select
                required
                onValueChange={(value) => updateFormData({ vintageYear: value } as Partial<SellerFormData>)}
                value={sellerFormData.vintageYear}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {VINTAGE_YEARS.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="space-y-2">
          <h3 className="font-medium text-lg">Transaction Details</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lpCommitment">LP Commitment Amount *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input
                  id="lpCommitment"
                  type="number"
                  required
                  min="0"
                  step="1000"
                  className="pl-7"
                  value={sellerFormData.lpCommitmentAmount || ""}
                  onChange={(e) =>
                    updateFormData({ lpCommitmentAmount: Number(e.target.value) } as Partial<SellerFormData>)
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lpInvested">LP Invested Amount to Date *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input
                  id="lpInvested"
                  type="number"
                  required
                  min="0"
                  step="1000"
                  className="pl-7"
                  value={sellerFormData.lpInvestedAmount || ""}
                  onChange={(e) =>
                    updateFormData({ lpInvestedAmount: Number(e.target.value) } as Partial<SellerFormData>)
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Sale Percentage *</Label>
              <Select
                required
                onValueChange={(value) => updateFormData({ salePercentage: value } as Partial<SellerFormData>)}
                value={sellerFormData.salePercentage}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select percentage" />
                </SelectTrigger>
                <SelectContent>
                  {SALE_PERCENTAGES.map((percentage) => (
                    <SelectItem key={percentage} value={percentage}>
                      {percentage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedValue">Expected Value *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input
                  id="expectedValue"
                  type="number"
                  required
                  min="0"
                  step="1000"
                  className="pl-7"
                  value={sellerFormData.expectedValue || ""}
                  onChange={(e) => updateFormData({ expectedValue: Number(e.target.value) } as Partial<SellerFormData>)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          <h3 className="font-medium text-lg">Additional Information</h3>
          <div className="space-y-2">
            <Label htmlFor="memo">Additional Details</Label>
            <Textarea
              id="memo"
              placeholder="Share any additional details about the sale..."
              value={sellerFormData.memo || ""}
              onChange={(e) => updateFormData({ memo: e.target.value } as Partial<SellerFormData>)}
            />
          </div>
        </div>

        {/* Fund Manager Information */}
        <div className="space-y-6">
          <h3 className="font-medium text-lg">Fund Manager&apos;s Contact Information</h3>
          <div className="space-y-2">
            <Label htmlFor="fundManagerName">Fund Manager Name *</Label>
            <Input
              id="fundManagerName"
              required
              value={sellerFormData.fundManagerName || ""}
              onChange={(e) => updateFormData({ fundManagerName: e.target.value } as Partial<SellerFormData>)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fundManagerEmail">Fund Manager Email *</Label>
            <Input
              id="fundManagerEmail"
              type="email"
              required
              value={sellerFormData.fundManagerEmail || ""}
              onChange={(e) => updateFormData({ fundManagerEmail: e.target.value } as Partial<SellerFormData>)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fundManagerPhone">Fund Manager Phone</Label>
            <Input
              id="fundManagerPhone"
              type="tel"
              value={sellerFormData.fundManagerPhone || ""}
              onChange={(e) => updateFormData({ fundManagerPhone: e.target.value } as Partial<SellerFormData>)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => setStep(1)}>
            Back
          </Button>
          <Button type="submit" disabled={!isFormValid()}>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  )
}

