import { api } from "@/axios"
import { useQuery } from "@tanstack/react-query"
import { type featuredResponse } from "@/types/feathered_response"

const gitData = async () => {
  const response = await api.get<featuredResponse>("/products/featured")
  return response.data.data
}

export const useFeatured = () => {
  return useQuery({
    queryKey: ["featured"],
    queryFn: () => gitData(),
  })
}
