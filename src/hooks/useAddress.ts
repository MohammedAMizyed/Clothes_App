import { api } from "@/axios"
import type { addressType } from "@/types/address_response"
import { useMutation } from "@tanstack/react-query"
type newDataType = {
  region_id: string
  address: string
}
const postData = async (newData: newDataType) => {
  const response = await api.put<addressType>(`/auth/address`, newData)
  return response.data
}
export const useAddress = () => {
  return useMutation({
    mutationFn: postData,
  })
}
