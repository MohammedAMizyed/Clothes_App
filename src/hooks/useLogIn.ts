import { api } from "@/axios"
import { type LogInResponse } from "@/types/login_response"
import { useMutation } from "@tanstack/react-query"
type userData = {
  phone: string
  password: string
}
const postData = async (userData: userData) => {
  const response = await api.post<LogInResponse>("/auth/login", userData)
  return response.data
}
export const useLogIn = () => {
  return useMutation({
    mutationFn: postData,
  })
}
