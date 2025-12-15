/* eslint-disable react-hooks/immutability */
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

type product = {
  urlImg: string
  plusSize: string
  rate: string
  discTitle: string
  iconUrl: string
  newPrice: string
  oldPrice?: string
  colors?: string
  btnTitle?: string
  id?: number
  isPlus?: boolean
}

export default function ProductCard({
  urlImg,
  plusSize,
  rate,
  discTitle,
  iconUrl,
  newPrice,
  oldPrice,
  colors,
  btnTitle,
  id,
  isPlus,
}: product) {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Card className="shadow-none border-0 sm:mb-15 bg-[#fffcf9] ">
      <CardContent className={"p-0 relative cursor-pointer "}>
        <div className="my-2  sm:ml-3">
          <div
            onClick={() => {
              navigate(`/products/${id}`)
            }}
            className="relative overflow-hidden sm:rounded-4xl rounded-2xl myShadow"
          >
            <img
              className={cn(
                "object-cover  sm:h-[339px] h-[125px]  sm:w-[339px]",
                location.pathname === "/" ? "w-[145px]" : "w-[120px]"
              )}
              src={urlImg}
              alt="img"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div
              className={cn(
                "sm:flex hidden absolute bg-[#FF914C] overflow-hidden  border  top-0  text-white",
                i18n.language === "ar"
                  ? "rounded-bl-[28px]  border-l-2"
                  : "rounded-br-[28px] -left-1 border-r-2"
              )}
            >
              <div className={cn("p-2 text-[14px] font-bold ")}>
                {" "}
                {isPlus ? (
                  <span
                    className={cn(
                      "bg-black p-2  border border-l-2 -mr-3",
                      i18n.language === "ar"
                        ? "rounded-bl-3xl pl-3"
                        : "rounded-br-3xl pr-3"
                    )}
                  >
                    {plusSize}
                  </span>
                ) : null}
                <span className=" bg-[#FF914C] line-through text-[15px] font-extrabold  p-2">
                  {rate}
                </span>
              </div>
            </div>
          </div>

          <div className="m-2">
            <div className=" mb-2 sm:mb-0 flex justify-between items-center ">
              <h3 className="sm:text-[24px] text-[14px] text-wrap max-w-[80px] sm:max-w-fit  font-semibold">
                {discTitle}
              </h3>
              <div className="myShadow rounded-[50%] sm:p-2 p-1 ">
                <img className="w-4 sm:w-full" src={iconUrl} alt="icon" />
              </div>
            </div>
            <div className="flex sm:gap-2 gap-1 justify-start m-y2">
              <h3 className="text-[#FF914C] sm:text-[25px] text-[14px] font-bold">
                {newPrice}
              </h3>
              <span className="line-through text-[#00000033] sm:text-[18px] text-[12px]">
                {oldPrice}
              </span>
            </div>
            <span className=" text-[#00000033] sm:text-[18px] text-[12px] block">
              {colors}
            </span>
            <Button className="sm:flex hidden text-[24px] font-semibold w-full rounded-[20px] bg-[#FFFFFF] text-[#FF914C] myShadow py-8 cursor-pointer hover:text-white hover:bg-[#FF914C] transition-all duration-200">
              {btnTitle}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
