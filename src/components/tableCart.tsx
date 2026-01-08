import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useCart } from "@/hooks/useMyCart"
import { useTranslation } from "react-i18next"
import CartRow from "./cartRow"
import { Loader2 } from "lucide-react"

export default function TableCart() {
  const { t } = useTranslation()
  const { data: myCart, isPending, isError } = useCart()

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
        {isError && (
          <TableCaption>
            <div className="text-red-600 font-bold w-full ">{t("error")}</div>
          </TableCaption>
        )}
        {isPending ? (
          <TableCaption>
            <div className="flex justify-center m-10">
              <Loader2 className="animate-spin size-10.5 " />
            </div>
          </TableCaption>
        ) : (
          <TableBody>
            {myCart?.data.items.map((item) => {
              return <CartRow key={item.id} {...item} />
            })}
          </TableBody>
        )}
      </Table>
    </div>
  )
}
