export interface featuredResponse {
  message: string
  data: data[]
}

export interface data {
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
  is_featured: boolean
  categories: Category[]
}

export interface Category {
  id: number
  name: string
  slug: string
}
