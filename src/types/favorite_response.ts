export interface favoriteResponse {
  message: string
  data: Data
}

export interface Data {
  id: number
  product_id: number
  name_en: string
  name_ar: string
  image: string
  createdAt: Date
  updatedAt: Date
  product: Product
  is_favorite: boolean
}

export interface Product {
  id: number
  code: string
  slug: string
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  price: number
  main_image_url: string
  is_active: boolean
  is_featured: boolean
  is_best_seller: boolean
  createdAt: Date
  updatedAt: Date
}
