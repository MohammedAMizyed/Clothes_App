export interface cartResult {
  message: string
  data: Data
}

export interface Data {
  id: string
  user_id: string
  updatedAt: Date
  items: Item[]
  _count: Count
  paymentSummary: PaymentSummary
}

export interface Count {
  items: number
}

export interface Item {
  id: number
  quantity: number
  size_code: string
  color: Color
  size: Size
  product: Product
}

export interface Color {
  name: string
  id: number
  image: string
}

export interface Product {
  price: number
  id: number
  code: string
  name: string
  description: string
  main_image_url: string
}

export interface Size {
  id: number
  size_code: string
  inventories: Inventory[]
}

export interface Inventory {
  id: number
  amount: number
  sold: number
  branch: Branch
}

export interface Branch {
  id: number
  name: Name
}

export enum Name {
  AbuDhabiMarinaBranch = "Abu Dhabi Marina Branch",
  DubaiMallBranch = "Dubai Mall Branch",
}

export interface PaymentSummary {
  totalItems: number
  totalPrice: number
}
