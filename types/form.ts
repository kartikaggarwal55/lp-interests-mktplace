export type Role = "buyer" | "seller"

export interface CommonFormData {
  fullName: string
  email: string
  phone?: string
  linkedinUrl: string
}

export interface BuyerFormData extends CommonFormData {
  // Investment Details
  availableCapital: string
  investmentInterests: string[]
  otherInvestmentInterest?: string
  fundsOfInterest: string[]

  // Current Investment Portfolio
  hasExistingInvestments: boolean
  currentInvestments?: string

  // Additional Information
  backgroundInfo?: string
  capitalSources: string[]
  otherCapitalSource?: string
  referralSource: string
}

export interface SellerFormData extends CommonFormData {
  fundName: string
  vintageYear: string
  lpCommitmentAmount: number
  lpInvestedAmount: number
  salePercentage: string
  memo?: string
  expectedValue: number
  fundManagerName: string
  fundManagerEmail: string
  fundManagerPhone?: string
}

