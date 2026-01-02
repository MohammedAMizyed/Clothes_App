import { useMutation } from "@tanstack/react-query"
import { api } from "@/axios"
import type { addToCartResult } from "@/types/addToCart_response"

const postData = async (data: {
  color_id: number
  size_code: string
  quantity: number
}) => {
  const response = await api.post<addToCartResult>("/cart/add", data)
  return response.data
}
export const useAddToCart = () => {
  return useMutation({
    mutationFn: postData,
  })
}
