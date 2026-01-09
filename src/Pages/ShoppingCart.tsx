import Header from "@/components/Header"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import arrowImg from "../assets/Vector 110.svg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import TableCart from "@/components/tableCart"
import { useCart } from "@/hooks/useMyCart"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function ShoppingCart() {
  const { t, i18n } = useTranslation()
  const { data, status } = useCart()
  return (
    <div className="">
      <div className="relative">
        <Header />
        <img
          className="select-none object-cover w-full h-[98px] sm:h-[250px]"
          src={backgroundImg}
          alt="img"
        />
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/45 via-black/45 to-black/45"></div>
      </div>
      <div className="container sm:px-40!">
        <div className="text-center my-15">
          <h1 className="mb-2 sm:font-bold font-medium text-[18px] sm:text-[40px] ">
            {t("shoppingCart.title")}
          </h1>
          <p className="  text-[12px] font-normal sm:text-[24px] sm:font-semibold">
            {t("shoppingCart.description")}
          </p>
        </div>
        <div
          className={cn(
            "flex gap-2 mb-5 items-center",
            i18n.language === "en" ? "justify-start" : "flex-row-reverse"
          )}
        >
          <Link to={"/"}>
            <h2 className=" cursor-pointer text-[#1a1a1a9d] sm:text-[24px] text-[12px] font-normal sm:font-bold">
              Home
            </h2>
          </Link>

          <img className="sm:w-fill max-w-11" src={arrowImg} alt="arrowIcon" />
          <h2 className="sm:text-[24px] text-[17px] font-normal sm:font-bold">
            Products Details
          </h2>
        </div>
        <div>
          <h1 className=" mb-5 font-semibold text-[12px] sm:text-[18px] text-[#ff0000]">
            {t("shoppingCart.error")}
          </h1>
        </div>
        <div className=" gap-5 mb-100 flex flex-col sm:flex-row">
          <div className="flex-5/6">
            <TableCart />
          </div>
          <div className="flex-1/6">
            <div className=" border-2 border-[#F3E0C8] rounded-2xl">
              <h3 className="text-left p-2 border-b-2 border-[#F3E0C8] text-[20px] font-semibold">
                Order Summary
              </h3>
              <div>
                <div className="flex justify-between p-2 text-[16px] font-semibold">
                  {t("numOfProducts")}
                  <span>{data?.data?.paymentSummary.totalItems}</span>
                  {status === "pending" && (
                    <Loader2 className="animate-spin"></Loader2>
                  )}
                </div>
                <div className=" flex justify-between mp-2 text-[16px] font-semibold p-2">
                  {t("totalHave")}
                  <Loader2 className="animate-spin"></Loader2>
                </div>
                <div className="flex justify-between mp-2 text-[16px] font-semibold p-2">
                  {t("salll")}
                  <Loader2 className="animate-spin"></Loader2>
                </div>
                <div className=" flex justify-between mp-2 text-[16px] font-semibold p-2">
                  {t("dareba")}
                  <Loader2 className="animate-spin"></Loader2>
                </div>
                <div className="flex justify-between mp-2 text-[16px] font-semibold p-2">
                  {t("priceOfDelevery")}
                  <Loader2 className="animate-spin"></Loader2>
                </div>
                <div className="mp-2 text-[16px] flex justify-between font-semibold p-2">
                  {t("asema")}
                  <Loader2 className="animate-spin"></Loader2>
                </div>
                <div className="border-t-2 p-3 border-[#F3E0C8] gap-2 flex justify-between  mp-2 text-[16px] font-semibold ">
                  {t("total")}
                  <span>
                    {Math.trunc(data?.data?.paymentSummary.totalPrice || 0)}
                    {status === "pending" && (
                      <Loader2 className="animate-spin"></Loader2>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-2 ">
              <Button
                className=" cursor-pointer hover:bg-[#FF914C] myShadow text-[16px] font-bold p-5 w-full rounded-2xl bg-[#FF914C] "
                variant={"default"}
              >
                {t("confirm order")}
              </Button>
            </div>
            <div className="text-center">
              {t("shoppingRelacx")}{" "}
              <Link to={"/replacementAccording"}>
                <span className="text-[12px] font-semibold underline text-[#006FFF]">
                  {t("according to policy")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
