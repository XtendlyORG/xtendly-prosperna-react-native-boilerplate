export interface SampleState {
  loading: Loading
  companyId: number
  company: string
  employees: number
  address: string
}

export interface RandomData {
  companyId: number
  company: string
  employees: number
  address: string
}

export interface RandomResponse {
  title: string
  message: string
  status: number
  data: RandomData
}
