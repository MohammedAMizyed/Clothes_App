import { TableCell, TableRow } from "@/components/ui/table"
import type { cartResult } from "@/types/cart_response"
import { useTranslation } from "react-i18next"
import shoppingCartImg from "../assets/shoppingCartImg.jpg"
import QuantityButton from "./QuantityButton"
import { DeleteIcon } from "lucide-react"
import { useRemoveProductFromCart } from "@/hooks/useRemoveProductFromCart"
type Props = cartResult["data"]["items"][number]
const CartRow = (item: Props) => {
  const { t } = useTranslation()
  const { mutate } = useRemoveProductFromCart()

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="mr-1 flex  gap-2 justify-center items-center">
          <DeleteIcon
            onClick={() => {
              mutate(item.id)
            }}
            className="cursor-pointer hover:text-red-700 "
          />

          <div className="flex gap-2 justify-center items-center">
            <img
              className="  max-h-[77px] max-w-[81px] rounded-[10px] "
              src={shoppingCartImg}
              alt="img of product"
            />
            <div className=" font-medium">
              <h3 className="text-[16x] font-medium ">{item.product.name}</h3>
              <span className="text-[10px] text-[#A97C50] ">
                <span>اللون: </span>
                {item.color.name} | {t("sizeIs:")}
                <span>المقاس: </span>
                {item.size_code}{" "}
              </span>
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell>
        {" "}
        <span>{t("usa")} </span>
        {item.product.price}
      </TableCell>
      <TableCell>
        <QuantityButton {...item} />
      </TableCell>
      <TableCell className="">
        <div className="flex justify-end items-center">
          {item.product.price * item.quantity}
        </div>
      </TableCell>
    </TableRow>
  )
}

export default CartRow
