export interface ProductDetailsResponse {
  message: string
  data: Data
}

export interface Data {
  id: number
  slug: string
  name: string
  main_image_url: string
  price: number
  code: string
  product_id: number
  product_name: string
  color_name: string
  has_plus_size: boolean
  is_favorite: boolean
  categories: Category[]
  other_colors: OtherColor[]
  sizes: Size[]
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface OtherColor {
  id: number
  name: string
  image_url: string
}

export interface Size {
  id: number
  size_code: string
  is_available: boolean
}
