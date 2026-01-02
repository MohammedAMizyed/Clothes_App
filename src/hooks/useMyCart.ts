import { useQuery } from "@tanstack/react-query"
import { api } from "@/axios"
import type { cartResult } from "@/types/cart_response"
const fetchingData = async () => {
  const response = await api.get<cartResult>("/cart")
  return response.data
}
export const useCart = () => {
  return useQuery({
    queryKey: ["myCart"],
    queryFn: () => fetchingData(),
  })
}
