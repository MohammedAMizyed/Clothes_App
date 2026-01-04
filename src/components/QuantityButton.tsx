import { useUpdataQuantity } from "@/hooks/useUpdateQuantity"
import type { cartResult } from "@/types/cart_response"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

type Props = cartResult["data"]["items"][number]

const QuantityButton = (item: Props) => {
  const { mutate, isPending } = useUpdataQuantity()

  const inc = () => {
    mutate({
      id: item.id,
      quantity: item.quantity + 1,
    })
  }

  const dec = () => {
    mutate({
      id: item.id,
      quantity: item.quantity - 1,
    })
  }
  return (
    <div className="flex justify-end  items-center">
      <div className="flex items-center border-2 border-[#f8e0c8]  rounded-[9px]">
        <Button
          disabled={item.quantity >= 10 || isPending}
          onClick={inc}
          className="text-[25px] cursor-pointer disabled:opacity-45"
          variant={"ghost"}
        >
          +
        </Button>
        <span className="border-r-2 border-l-2 border-[#f8e0c8] p-3">
          {isPending ? (
            <Loader2 className="animate-spin size-3.5" />
          ) : (
            item.quantity
          )}
        </span>
        <Button
          disabled={item.quantity <= 1 || isPending}
          onClick={dec}
          className="text-[25px] cursor-pointer disabled:opacity-45"
          variant={"ghost"}
        >
          -
        </Button>
      </div>
    </div>
  )
}

export default QuantityButton
