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
type Props = {
  product: string | ReactNode
  price: string
  quantity: string | ReactNode
  total: string | ReactNode
}
export default function TableRe({ product, price, quantity, total }: Props) {
  const { t } = useTranslation()
  return (
    <div className="overflow-hidden rounded-2xl border border-[#f3e0c8]">
      <Table className="">
        <TableHeader className="">
          <TableRow className=" overflow-hidden bg-[#f3e0c8]  hover:bg-[#f3e0c8c5] ">
            <TableHead className="text-center w-[400px]">
              {t("product")}
            </TableHead>
            <TableHead className="text-right">{t("price")}</TableHead>
            <TableHead className="">{t("add to cart")}</TableHead>
            <TableHead className="">{t("delete")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
