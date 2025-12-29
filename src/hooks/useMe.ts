import { api } from "@/axios"
import { useQuery } from "@tanstack/react-query"
import { type meType } from "@/types/me_response"
const fetchingData = async () => {
  const response = await api.get<meType>("/auth/me")
  console.log(response.data)
  return response.data
}
export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => fetchingData(),
  })
}
