import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/axios"
import type { updataQuantityResponse } from "@/types/updataQuantity_response"

const postData = async ({ id, quantity }: { id: number; quantity: number }) => {
  const response = await api.put<updataQuantityResponse>(`/cart/${id}`, {
    quantity,
  })
  return response.data
}
export const useUpdataQuantity = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myCart"],
      })
    },
  })
}
