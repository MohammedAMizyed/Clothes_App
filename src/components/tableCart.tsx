import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useCart } from "@/hooks/useMyCart"
import deleteProduct from "../assets/deleteFromoppingCart.svg"
import shoppingCartImg from "../assets/shoppingCartImg.jpg"

type Props = {
  product: string | ReactNode
  price: string
  quantity: string | ReactNode
  total: string | ReactNode
}
export default function TableCart({ product, price, quantity, total }: Props) {
  const { t } = useTranslation()
  const { data: myCart } = useCart()
  return (
    <div className="overflow-hidden rounded-2xl border border-[#f3e0c8]">
      <Table className="">
        <TableHeader className="">
          <TableRow className=" overflow-hidden bg-[#f3e0c8]  hover:bg-[#f3e0c8c5] ">
            <TableHead className="text-center w-[400px]">
              {t("product")}
            </TableHead>
            <TableHead className="text-right">{t("price")}</TableHead>
            <TableHead className="">{t("quantity")}</TableHead>
            <TableHead className="">{t("total")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myCart?.data.items.map((item) => {
            return (
              <TableRow>
                <TableCell className="font-medium">
                  <div className="mr-1 flex  gap-2 justify-center items-center">
                    <img src={deleteProduct} alt="deleteIcon" />

                    <div className="flex gap-2 justify-center items-center">
                      <img
                        className="  max-h-[77px] max-w-[81px] rounded-[10px] "
                        src={shoppingCartImg}
                        alt="img of product"
                      />
                      <div className=" font-medium">
                        <h3 className="text-[16x] font-medium ">
                          {item.product.name}
                        </h3>
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
                  <div className="flex justify-end items-center">
                    {item.quantity}
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className="flex justify-end items-center">{}</div>
                </TableCell>
              </TableRow>
            )
          })}
          <TableRow>
            <TableCell className="font-medium">{product}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>
              <div className="flex justify-end items-center">{quantity}</div>
            </TableCell>
            <TableCell className="">
              <div className="flex justify-end items-center">{total}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{product}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>
              <div className="flex justify-end items-center">{quantity}</div>
            </TableCell>
            <TableCell className="">
              <div className="flex justify-end items-center">{total}</div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
