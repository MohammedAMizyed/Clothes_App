import { api } from "@/axios"
import { useQuery } from "@tanstack/react-query"

type Category = {
  id: number
  name: string
  slug: string
}

export type Product = {
  id: number
  slug: string
  name: string
  main_image_url: string
  price: string
  code: string
  product_id: number
  product_name: string
  color_name: string
  has_plus_size: boolean
  is_favorite: boolean
  is_featured: boolean
  categories: Category[]
}

type Data = {
  message: string
  data: Product[]
}

const fetchingData = async (
  category_id?: number,
  size_id?: number,
  has_plus_size?: boolean
) => {
  const response = await api.get<Data>(`/products`, {
    params: {
      category_id,
      size_id,
      has_plus_size,
    },
  })

  return response.data.data
}
export const useProducts = (
  id?: number,
  size_id?: number,
  has_plus_size?: boolean
) => {
  return useQuery({
    queryKey: ["products", id, size_id, has_plus_size],
    queryFn: () => fetchingData(id, size_id, has_plus_size),
  })
}
