export interface LogInResponse {
  message: string
  data: Data
}

export interface Data {
  accessToken: string
  user: User
}

export interface User {
  id: string
  phone: string
  email: string
  name: string
  role: string
  status: string
  region_id: number
  address: string
  createdAt: Date
  updatedAt: Date
  region: Region
}

export interface Region {
  id: number
  name: string
  emirate: Emirate
}

export interface Emirate {
  id: number
  name: string
}
