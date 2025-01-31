"use client"

import { createContext, useContext, useState } from "react"
import type { Role, BuyerFormData, SellerFormData } from "@/types/form"

const initialBuyerData: BuyerFormData = {
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

const initialSellerData: SellerFormData = {
  fullName: "",
  email: "",
  linkedinUrl: "",
  fundName: "",
  vintageYear: "",
  position: "",
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
  const [formData, setFormData] = useState<BuyerFormData | SellerFormData>(
    () => role === 'buyer' ? initialBuyerData : initialSellerData
  )

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

