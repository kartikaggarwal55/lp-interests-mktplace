"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { Role, BuyerFormData, SellerFormData } from "@/types/form"

// Export your initial data so you can use it when resetting the form.
export const initialBuyerData: BuyerFormData = {  // <-- Exported initial buyer data
  fullName: "",
  email: "",
  linkedinUrl: "",
  availableCapital: "",
  investmentInterests: [],
  fundsOfInterest: [],
  hasExistingInvestments: false,
  capitalSources: [],
  referralSource: ""
}

export const initialSellerData: SellerFormData = {  // <-- Exported initial seller data
  fullName: "",
  email: "",
  linkedinUrl: "",
  fundName: "",
  vintageYear: "",
  lpCommitmentAmount: 0,
  lpInvestedAmount: 0,
  salePercentage: "",
  expectedValue: 0,
  fundManagerName: "",
  fundManagerEmail: ""
}

interface FormContextType {
  role: Role | null
  setRole: (role: Role) => void
  step: number
  setStep: (step: number) => void
  formData: BuyerFormData | SellerFormData
  updateFormData: (data: Partial<BuyerFormData | SellerFormData>) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role | null>(null)
  const [step, setStep] = useState(0)
  // Start with an empty object or a generic initial state.
  const [formData, setFormData] = useState<BuyerFormData | SellerFormData>({} as BuyerFormData | SellerFormData)

  // <-- Change: Add an effect to update/reset formData when the role changes.
  useEffect(() => {
    if (role === "buyer") {
      setFormData(initialBuyerData)
    } else if (role === "seller") {
      setFormData(initialSellerData)
    }
    // If role is not set, you could leave formData as an empty object.
  }, [role])

  const updateFormData = (data: Partial<BuyerFormData | SellerFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }))
  }

  return (
    <FormContext.Provider value={{ role, setRole, step, setStep, formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) throw new Error("useForm must be used within FormProvider")
  return context
}
