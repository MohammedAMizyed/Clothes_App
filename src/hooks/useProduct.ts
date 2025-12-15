import { api } from "@/axios"
import type { ProductDetailsResponse } from "@/types/product-details"
import { useQuery } from "@tanstack/react-query"

const fetchingData = async (id: string) => {
  const response = await api.get<ProductDetailsResponse>(`/products/${id}`)

  return response.data.data
}
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product-details", id],
    queryFn: () => fetchingData(id),
    staleTime: 5 * 60 * 1000,
  })
}
