import Header from "@/components/Header"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import arrowImg from "../assets/Vector 110.svg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import TableRe from "@/components/TableRe"
import shoppingCartImg from "../assets/shoppingCartImg.jpg"
import like from "../assets/like.svg"
import plusImg from "../assets/plus.svg"
import delete1 from "../assets/deleteFromoppingCart.svg"

export default function Favorite() {
  const { t, i18n } = useTranslation()
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
      <div className="container">
        <div className="sm:px-40">
          <div className="text-center my-15">
            <h1 className="mb-2 sm:font-bold font-medium text-[18px] sm:text-[40px] ">
              {t("favorite.title")}
            </h1>
            <p className=" text-[12px] font-normal sm:text-[24px] sm:font-semibold">
              {t("favorite.description")}
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between">
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

              <img
                className="sm:w-fill max-w-[44px]"
                src={arrowImg}
                alt="arrowIcon"
              />
              <h2 className="sm:text-[24px] text-[17px] font-normal sm:font-bold">
                Favorite Page
              </h2>
            </div>
            <div>
              <h1 className="font-semibold sm:text-[18px] text-[#ff0000]">
                {t("favorite.error")}
              </h1>
            </div>
          </div>
          <div className="mb-100 flex gap-5">
            <div className="flex-4/5">
              <TableRe
                product={
                  <div className="mr-1 flex  gap-2 justify-center items-center">
                    <img src={like} alt="deleteIcon" />

                    <img
                      className="  max-h-[77px] w-[81px] rounded-[10px] "
                      src={shoppingCartImg}
                      alt="ProductImg"
                    />

                    <div>
                      <h2>{t("prayer")}</h2>
                      <span className="text-[#876340] text-[10px] font-medium">
                        {t("product-colors")}
                      </span>
                    </div>
                  </div>
                }
                price={120 + t("usa")}
                total={
                  <div className="rounded-[5px]">
                    <img src={delete1} alt="delete1" />
                  </div>
                }
                quantity={
                  <div className="flex gap-2">
                    <img src={plusImg} alt="plusImg" />
                    <span className="text-[12px] font-medium underline">
                      {t("add to cart")}
                    </span>
                  </div>
                }
              />
            </div>

            <div className=" flex-1/6 border border-[#f3e0c8] rounded-2xl">
              <h2 className="border-b border-[#f3e0c8] w-full p-2 font-semibold sm:text-[20px]">
                {t("favoritePieces")}
              </h2>
              <div className="p-2">
                <div className="text-[#1A1A1A] py-1 flex justify-between font-normal text-[12px] sm:text-[16px]">
                  {t("countOfPieces")} <span>3</span>
                </div>
                <div className="text-[#1A1A1A] py-1 flex justify-between font-normal text-[12px] sm:text-[16px]">
                  {t("dresses")} <span>3</span>
                </div>
                <div className="text-[#1A1A1A] py-1 flex justify-between font-normal text-[12px] sm:text-[16px]">
                  {t("TravelClothes")} <span>3</span>
                </div>{" "}
                <div className="text-[#1A1A1A] py-1 flex justify-between font-normal text-[12px] sm:text-[16px]">
                  {t("WinterClothes")} <span>3</span>
                </div>{" "}
                <div className="text-[#1A1A1A] py-1 flex justify-between font-normal text-[12px] sm:text-[16px]">
                  {t("Swimwear")} <span>3</span>
                </div>{" "}
                <div className="text-[#1A1A1A] py-1 flex justify-between font-normal text-[12px] sm:text-[16px]">
                  {t("hijabs and prayer clothes")} <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
