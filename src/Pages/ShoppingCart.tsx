import Header from "@/components/Header"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import arrowImg from "../assets/Vector 110.svg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import TableCart from "@/components/tableCart"
import deleteProduct from "../assets/deleteFromoppingCart.svg"
import shoppingCartImg from "../assets/shoppingCartImg.jpg"
import { useState } from "react"
export default function ShoppingCart() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="relative">
        <Header />
        <img
          className="select-none object-cover w-full h-[98px] sm:h-[250px]"
          src={backgroundImg}
          alt="img"
        />
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/45 via-black/45 to-black/45"></div>
      </div>
      <div className="container px-40!">
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
          <h1 className=" mb-5 font-semibold sm:text-[18px] text-[#ff0000]">
            {t("shoppingCart.error")}
          </h1>
        </div>
        <div className="mb-100">
          <div>
            <TableCart
              product={
                <div className="mr-1 flex  gap-2 justify-center items-center">
                  <img src={deleteProduct} alt="deleteIcon" />

                  <img
                    className="  max-h-[77px] max-w-[81px] rounded-[10px] "
                    src={shoppingCartImg}
                    alt="ProductImg"
                  />

                  <div>
                    <h2>{t("prayer")}</h2>
                    <span>{t("product-colors")}</span>
                  </div>
                </div>
              }
              price={120 + t("usa")}
              total={120 + t("usa")}
              quantity={
                <div className="flex gap-2 justify-center items-center rounded-[5px] border-[#F8E0C8] border ">
                  <button
                    onClick={() => {
                      setCount((count) => count - 1)
                    }}
                  >
                    -
                  </button>
                  <div>{count}</div>
                  <button
                    onClick={() => {
                      setCount((count) => count + 1)
                    }}
                  >
                    +
                  </button>
                </div>
              }
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
