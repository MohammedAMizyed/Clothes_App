import { useMutation } from "@tanstack/react-query"
import { api } from "@/axios"
import type { meResponse } from "@/types/me_response"

const postData = async (name: string) => {
  const response = await api.put<meResponse>("/auth/info", name)

  return response.data
}
export const useEditMyData = () => {
  return useMutation({
    mutationFn: postData,
  })
}
