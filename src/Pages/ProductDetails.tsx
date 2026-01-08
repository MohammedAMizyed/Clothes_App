import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ProductDetailsCarouselCol } from "@/components/ProductDetailsCaroselCol"
import { ProductDetailsCarouselRow } from "@/components/ProductDetailsCarosulRow"
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel"
import { Button } from "@/components/ui/button"
import { useProduct } from "@/hooks/useProduct"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { Link, Navigate, useParams } from "react-router-dom"
import arrowImg from "../assets/Vector 110.svg"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import noteIcon from "../assets/post-it 1.svg"
import LikeButton from "@/components/LikeButton"
import { useFavorite } from "@/hooks/useFavorite"
import { useState } from "react"
import { useEffect } from "react"
import { useAddToCart } from "@/hooks/useAddToCart"
import { useTost } from "@/context/TostContext"
import { PanelRightIcon } from "lucide-react"
export default function ProductDetails() {
  const { t, i18n } = useTranslation()
  const { id } = useParams() as { id: string }

  const { data: product, status } = useProduct(id)
  const { mutate: mutateAddToCart } = useAddToCart()
  const { mutate } = useFavorite()

  const [selectedSize, setSelectedSize] = useState<string>("S")
  const [liked, setLiked] = useState<boolean>(!!product?.is_favorite)
  const [quantity, setQuantity] = useState<number>(1)
  const { handleShowMessage } = useTost()
  useEffect(() => {
    if (product) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLiked(!!product.is_favorite)
    }
  }, [product])
  const handleAddToCart = () => {
    mutateAddToCart(
      { color_id: Number(id), size_code: selectedSize, quantity },
      {
        onSuccess: (response) => {
          console.log(response.data.quantity)
          handleShowMessage(
            <>
              {t("addSece")}
              <></>
            </>
          )
        },
        onError: (error) => {
          console.log(error)
        },
      }
    )
  }
  const onToggle = () => {
    // setLiked(!liked)
    if (!id) return
    mutate(
      { id, is_favorite: !liked },
      {
        onSuccess: (response) => {
          setLiked(response.data.is_favorite)
          console.log(response)
          handleShowMessage(
            <>
              {t("addSec")}
              <PanelRightIcon></PanelRightIcon>
            </>
          )
        },
        onError: (error) => {
          console.log(error)
        },
      }
    )
  }

  if (!id || !/^\d+$/.test(id)) {
    return <Navigate to={"/error"} replace />
  }

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
        <div className="text-center my-15">
          <h1 className="mb-2 sm:font-bold font-medium text-[18px] sm:text-[40px] ">
            {t("productDetails.title")}
          </h1>
          <p className=" text-[12px] font-normal sm:text-[24px] sm:font-semibold">
            {t("productDetails.description")}
          </p>
        </div>
        <div
          className={cn(
            "flex gap-2 mb-5 products-center",
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
        {status === "error" && (
          <div className="text-[40px] font-bold text-red-600 my-20 flex justify-center products-center">
            {t("error")}
          </div>
        )}
        <div key={product?.id}>
          <div className="flex sm:gap-15 gap-3 flex-col sm:flex-row">
            <div className="flex sm:gap-0 gap-4">
              <ProductDetailsCarousel />
              <div>
                <ProductDetailsCarouselCol />
              </div>
            </div>

            <div>
              <h3 className="text-[#A97C50] font-semibold text-[14px]">
                {t("catoucory")} {t(product?.categories[0].name)}
                {status === "pending" && (
                  <div className="font-bold text-[10px]  products-centers  animate-pulse ">
                    {t("loading")}...
                  </div>
                )}
              </h3>
              <div className="flex my-2 justify-between products-center">
                <h2 className="sm:text-[40px] sm:font-bold text-[14px] font-normal">
                  {product?.name}
                </h2>
                <LikeButton liked={liked} onToggle={onToggle} />
              </div>
              <div className="flex gap-2 products-center">
                <h2 className="sm:text-[24px] text-[12px] font-normal sm:font-bold">
                  {status === "pending" && (
                    <div className="font-bold text-[10px]  products-centers  animate-pulse ">
                      {t("loading")}...
                    </div>
                  )}
                  {product?.price} {t("productDetails.uae")}
                </h2>
                <span className="sm:text-[16px] text-[8px] font-medium line-through text-[#A97C50]">
                  150 {t("productDetails.uae")}
                </span>
              </div>
              <p className="my-1 text-[#A97C50] sm:text-[18px] text-[8px] font-medium sm:font-normal">
                {t("productDetails.paragraph")}
              </p>
              <div className="sm:m-0 m-2">
                <div className="flex sm:gap-2 gap-1 products-center">
                  <h3 className="sm:text-[16px] text-[12px] font-normal sm:font-bold">
                    {t("productDetails.colors")}:
                  </h3>
                  <h4 className="sm:text-[12px] text-[8px] font-normal">
                    {product?.other_colors.length} {t("productDetails.color")}
                  </h4>
                </div>
                <div>
                  {product?.other_colors.map((item) => {
                    return (
                      <img key={item.id} src={item.image_url} alt={item.name} />
                    )
                  })}{" "}
                </div>
              </div>
              <div className="sm:m-0 m-2">
                <h3 className=" text-[8px] sm:text-[16px] sm:font-bold font-normal my-2">
                  {t("productDetails.cm")}
                </h3>
                <p className="my-2 sm:text-[10px] font-normal text-[8px] sm:font-bold">
                  {t("productDetails.cmDescription")}
                </p>
                <Button className="text-[8px] sm:text-[12px] cursor-pointer myShadow bg-[#FF914C] rounded-[16px] mx-4 mb-2">
                  {t("addMySize")}
                </Button>
              </div>
              <div className="">
                <div className="flex products-center gap-2">
                  <img src={noteIcon} alt="noteIcon" />
                  <h3 className="underline text-[8px] sm:text-[10px] ">
                    {t("productDetails.note")}
                  </h3>
                </div>
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
              </div>
              <div className="flex items-center  gap-2">
                <Button
                  variant={"outline"}
                  className="cursor-pointer  text-[#FF914C] myShadow rounded-[18px] text-[12px] sm:text-[24px] p-6 "
                >
                  {t("baunow")}
                </Button>
                <Button
                  onClick={() => {
                    handleAddToCart()
                  }}
                  className="cursor-pointer bg-[#FF914C] myShadow text-[12px] sm:text-[24px] p-6 font-medium rounded-[18px] "
                >
                  {t("addtocart")}
                </Button>
                <div className="flex p-0   border-2 overflow-hidden rounded-2xl  border-[#f8e0c8] justify-center items-center ">
                  <Button
                    variant={"ghost"}
                    className=" p-3 h-full cursor-pointer text-3xl rounded-none"
                    onClick={() => {
                      setQuantity(quantity + 1)
                    }}
                  >
                    +
                  </Button>
                  <div className="px-4 h-full  flex justify-center items-center font-bold border-r-2 border-l-2 border-[#f8e0c8]  text-[18px] ">
                    {quantity}
                  </div>
                  <Button
                    className=" p-3 h-full cursor-pointer text-3xl  rounded-none"
                    variant={"ghost"}
                    onClick={() => {
                      setQuantity(quantity - 1)
                    }}
                  >
                    -
                  </Button>
                </div>
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
        </div>
        <div className="mb-15 hidden sm:block">
          <div className="flex my-5 justify-between products-center">
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
