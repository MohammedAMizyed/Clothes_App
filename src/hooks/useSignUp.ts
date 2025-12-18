import { api } from "@/axios"
import { useMutation } from "@tanstack/react-query"
import { type signUp } from "@/types/siginup_response"
export interface userData {
  phone: string
  email: string
  password: string
  region_id: number
  address: string
  name: string
}

const postData = async (userData: userData) => {
  const response = await api.post<signUp>("/auth/register", userData)
  return response.data
}
export const useSignUp = () => {
  return useMutation({
    mutationFn: postData,
  })
}
