import Header from "@/components/Header"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import arrowImg from "../assets/Vector 110.svg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import TableCart from "@/components/tableCart"
export default function ShoppingCart() {
  const { t, i18n } = useTranslation()
  const list = [
    { id: 1, name: t("numOfProducts") },
    { id: 2, name: t("totalHave") },
    { id: 3, name: t("salll") },
    { id: 4, name: t("dareba") },
    { id: 5, name: t("priceOfDelevery") },
    { id: 6, name: t("asema") },
    { id: 7, name: t("total") },
  ]
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
        <div className="mb-100 flex">
          <div className="flex-1">
            <TableCart />
          </div>
          <div>
            <h3></h3>
            <div>
              {list.map((item) => {
                return (
                  <div key={item.id}>
                    <div>{item.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
