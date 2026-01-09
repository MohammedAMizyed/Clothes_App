import { useProduct } from "@/hooks/useProduct"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
type Props = {
  selectedSize: string
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>
}
export default function ProductSizes({ selectedSize, setSelectedSize }: Props) {
  const { id } = useParams() as { id: string }

  const { data: product, status } = useProduct(id)
  const { t } = useTranslation()
  return (
    <div className="my-4 flex sm:gap-2 gap-1 flex-wrap">
      {product?.sizes.map((item) => {
        return (
          <div
            onClick={() => {
              setSelectedSize(item.size_code)
            }}
            className={cn(
              selectedSize === item.size_code &&
                "text-white bg-[#FF914C] border-white!",

              "w-6 cursor-pointer  h-6 sm:w-12 sm:h-12 text-[8px]  items-center sm:text-[15px] font-bold flex products-center justify-center  border-2 border-black rounded-sm "
            )}
            key={item.id}
          >
            {item.size_code}
          </div>
        )
      })}
      {status === "pending" && (
        <div className="font-bold text-[10px]  products-centers  animate-pulse ">
          {t("loading")}...
        </div>
      )}
    </div>
  )
}
