import { api } from "@/axios"
import { useQuery } from "@tanstack/react-query"
type data = {
  id: number
  name: string
}
type Categories = {
  data: data[]
}
const fetchingData = async () => {
  const response = await api.get<Categories>(`/lists/categories`)
  return response.data.data
}
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchingData(),
  })
}
