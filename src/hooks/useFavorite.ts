import { api } from "@/axios"
import { useMutation } from "@tanstack/react-query"
import { type favoriteResponse } from "@/types/favorite_response"
const postData = async ({
  id,
  is_favorite,
}: {
  id: number | string
  is_favorite: boolean
}) => {
  const response = await api.post<favoriteResponse>(
    `/products/${id}/favorite`,
    { is_favorite: is_favorite ? "true" : "false" }
  )
  return response.data
}

export const useFavorite = () => {
  return useMutation({
    mutationFn: postData,
  })
}
