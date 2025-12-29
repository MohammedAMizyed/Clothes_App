export interface meType {
  data: Data
}

export interface Data {
  id: string
  phone: string
  email: string
  name: string
  address: string
  region: Region
}

export interface Region {
  id: number
  name: string
  emirate: Emirate
}

export interface Emirate {
  name: string
}

export interface meResponse {
  data: Data
}

export interface Data {
  id: string
  phone: string
  email: string
  name: string
  address: string
  region: Region
}

export interface Region {
  id: number
  name: string
  emirate: Emirate
}

export interface Emirate {
  name: string
}
