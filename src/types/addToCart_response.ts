export interface addToCartResult {
  message: string
  data: Data
}

export interface Data {
  id: number
  cart_id: string
  color_id: number
  quantity: number
  size_code: string
}
