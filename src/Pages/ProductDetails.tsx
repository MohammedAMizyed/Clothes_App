import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import Header from "@/components/Header"
import { useTranslation } from "react-i18next"
import arrowImg from "../assets/Vector 110.svg"
import likeIcon from "../assets/like.svg"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import noteIcon from "../assets/post-it 1.svg"
import { Link } from "react-router-dom"
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel"
import Footer from "@/components/Footer"
import { ProductDetailsCarouselCol } from "@/components/ProductDetailsCaroselCol"
import { ProductDetailsCarouselRow } from "@/components/ProductDetailsCarosulRow"
import { ProductDetailsCarouselRowSmole } from "@/components/ProductDetailsCarouselRowSmole"
export default function ProductDetails() {
  const { t, i18n } = useTranslation()
  const sizes = [
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL",
    "8XL",
    "9XL",
    "10XL",
    "11XL",
    "12XL",
  ]
  return (
    <>
      <div className="relative">
        <Header />
        <img
          className="object-cover w-full h-[250px]"
          src={backgroundImg}
          alt="img"
        />
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/45 via-black/45 to-black/45"></div>
      </div>
      <div className="container">
        <div className="text-center my-15">
          <h1 className="mb-2 sm:font-bold font-medium text-[16px] sm:text-[40px] ">
            {t("productDetails.title")}
          </h1>
          <p className=" text-[12px] font-normal sm:text-[24px] sm:font-semibold">
            {t("productDetails.description")}
          </p>
        </div>
        <div
          className={cn(
            "flex gap-2 ",
            i18n.language === "en" ? "justify-start" : "flex-row-reverse"
          )}
        >
          <h2 className="text-[#1a1a1a9d] text-[24px] font-bold">Home</h2>
          <img src={arrowImg} alt="arrowIcon" />
          <h2 className="text-[24px] font-bold">Products</h2>
        </div>
        <div className="flex gap-15">
          <div className="flex">
            <ProductDetailsCarousel />
            <div>
              <ProductDetailsCarouselCol />
            </div>
          </div>

          <div>
            <h3 className="text-[#A97C50] font-semibold text-[14px]">
              {t("productDetails.catoucory")}
            </h3>
            <div className="flex justify-between items-center">
              <h2 className="text-[40px] font-bold">
                {t("productDetails.abaya")}
              </h2>
              <img src={likeIcon} alt="likeIcon" />
            </div>
            <div className="flex gap-2 items-center">
              <h2 className="text-[24px] font-bold">
                120 {t("productDetails.uae")}
              </h2>
              <span className="text-[16px] font-medium line-through text-[#A97C50]">
                150 {t("productDetails.uae")}
              </span>
            </div>
            <p className="text-[#A97C50] text-[18px] font-normal">
              {t("productDetails.paragraph")}
            </p>
            <div className="flex gap-2 items-center">
              <h3 className="text-[16px] font-bold">
                {t("productDetails.colors")}:
              </h3>
              <h4 className="text-[12px] font-normal">
                12 {t("productDetails.color")}
              </h4>
            </div>
            <div className="text-[40px]">
              <ProductDetailsCarouselRowSmole />
            </div>
            <div>
              <h3 className="text-[16px] font-bold my-2">
                {t("productDetails.cm")}
              </h3>
              <p className="my-2 text-[10px] font-bold">
                {t("productDetails.cmDescription")}
              </p>
              <Button className=" myShadow bg-[#FF914C] rounded-[16px] mx-4 mb-2">
                {t("addMySize")}
              </Button>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <img src={noteIcon} alt="noteIcon" />
                <h3 className="underline ">{t("productDetails.note")}</h3>
              </div>
              <div className="my-4 flex gap-2 flex-wrap">
                {sizes.map((item, index) => {
                  return (
                    <div
                      className="w-12 h-12 text-[15px] font-bold flex items-center justify-center  border-2 border-black rounded-sm "
                      key={index}
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={"outline"}
                className="text-[#FF914C] myShadow rounded-[18px] text-[24px] p-6 "
              >
                {t("baunow")}
              </Button>
              <Button className="bg-[#FF914C] myShadow text-[24px] p-6 font-medium rounded-[18px] ">
                {t("addtocart")}
              </Button>
              <div></div>
            </div>
            <div className="text-[12px] font-semibold flex my-4">
              <p>{t("accept")}</p>--{" "}
              <Link to={"/replacementAccording"}>
                <span className="underline text-[#006FFF]">
                  {t("learnMore")}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-15">
          <div className="flex my-5 justify-between items-center">
            <h3 className="text-[30px] font-medium">
              {t("productDetails.more")}
            </h3>
            <p className="text-[#006FFF] text-[20px] font-medium">
              {t("seeMore")}
            </p>
          </div>
          <ProductDetailsCarouselRow />
        </div>
      </div>
      <Footer />
    </>
  )
}
