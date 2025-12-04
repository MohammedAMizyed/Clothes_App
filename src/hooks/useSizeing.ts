import { api } from "@/axios"
import { useQuery } from "@tanstack/react-query"
type Size = {
  id: number
  code: string
  weight: string
}
type Response = {
  data: Size[]
}
const fetchingData = async () => {
  const response = await api.get<Response>(`/lists/sizes`)
  console.log(response.data)
  return response.data.data
}
export const useSizing = () => {
  return useQuery({ queryKey: ["sizing"], queryFn: () => fetchingData() })
}
