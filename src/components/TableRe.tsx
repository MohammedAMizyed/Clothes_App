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
  total: string
}
export default function TableRe({ product, price, quantity, total }: Props) {
  const { t } = useTranslation()
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#f3e0c8] rounded-2xl hover:bg-[#f3e0c8c5] ">
            <TableHead className="text-right w-[400px]">
              {t("product")}
            </TableHead>
            <TableHead className="text-right">{t("price")}</TableHead>
            <TableHead className="text-right">{t("quantity")}</TableHead>
            <TableHead className="text-right">{t("total")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{product}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell className="text-right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
