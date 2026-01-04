import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/axios"
const postData = async (id: number) => {
  const response = await api.delete(`/cart/${id}`, {})
  return response.data
}

export const useRemoveProductFromCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({})
    },
  })
}
