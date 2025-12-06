import { api } from "@/axios"
import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
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

const fetchingData = async (lang: string) => {
  const response = await api.get<Data>(`/products`, {
    headers: { "Accept-Language": lang },
  })

  console.log(response.data)
  return response.data.data
}
export const useProducts = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || "ar"
  return useQuery({
    queryKey: ["products", currentLang],
    queryFn: () => fetchingData(currentLang),
  })
}
