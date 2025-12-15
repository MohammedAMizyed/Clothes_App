import AccordionComponent from "@/components/AccordionComponent"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { useCategories } from "@/hooks/useCategories"
import { useProducts } from "@/hooks/useProducts"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import shoppingImg from "../assets/landingShoppingPage.svg"
import likeIcon from "../assets/like.svg"
import arrow from "../assets/Vector 110.svg"
import filter from "../assets/Vector.svg"
import { useSizing } from "@/hooks/useSizeing"
import DeterminationSize from "@/components/DeterminationSize"
// import { useSearchParams } from "react-router-dom"

export default function Products() {
  const [open, setOpen] = useState<boolean>(true)
  const { t, i18n } = useTranslation()
  // const [searchParams, setSearchParams] = useSearchParams()

  const [selected, setSelected] = useState<number | undefined>(undefined)
  const [selectedSize, setSelectedSize] = useState<number | undefined>(
    undefined
  )
  const [determine, setDetermine] = useState<boolean>(true)
  const [hasPlusSize, setHasPlusSize] = useState<boolean>(false)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [])

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories()

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts(selected, selectedSize, hasPlusSize)
  const { data: sizing, status: sizingStatus } = useSizing()

  return (
    <>
      <Header />
      <div className="relative">
        <img
          className="object-cover w-full h-full"
          src={shoppingImg}
          alt="landingShoppingPage"
        />
      </div>
      <div className="container">
        <div className="sm:block hidden absolute md:top-[100px] md:transform-[translateX(-50%)] md:w-full  lg:top-[40%] left-[50%] lg:transform-[translate(-50%,-40%)]">
          <h1 className=" text-center  text-[#FFFCF9] text-[50px] font-bold lg:min-w-[1000px]">
            {t("shopping.title")}
          </h1>
          <p className="text-center text-[#FFFCF9] text-[30px] font-medium">
            {t("shopping.description")}
          </p>
        </div>
        <div
          className={cn(
            "flex gap-1  items-center",
            i18n.language == "ar"
              ? "justify-start flex-row-reverse"
              : "justify-start"
          )}
        >
          <Link to={"/"}>
            <h2 className="text-[#1a1a1a9d] text-[24px] font-medium cursor-pointer">
              Home
            </h2>
          </Link>
          <img src={arrow} alt="arrow icon" />
          <h2 className="text-[24px] font-bold">Products</h2>
        </div>
        <div className=" hidden sm:flex items-start justify-center sm:flex-row flex-col-reverse ">
          <div className="sm:flex-3/4">
            <h1 className="mb-3 font-bold text-[35px]">{t("shopping.head")}</h1>

            <div className="flex gap-3 flex-wrap ">
              {products?.map((item) => {
                return (
                  <div key={item.id}>
                    <ProductCard
                      isPlus={item.has_plus_size}
                      newPrice={t("usa") + "" + item.price}
                      oldPrice={t("shop.content.oldPrice")}
                      colors={t("shop.content.colors")}
                      urlImg={item.main_image_url}
                      plusSize={t("shop.content.headTitle")}
                      rate={t("shop.content.headNot")}
                      btnTitle={t("shop.content.btn")}
                      iconUrl={likeIcon}
                      discTitle={item.product_name}
                      id={item.id}
                    />
                  </div>
                )
              })}
              {productsLoading ? (
                <div className="font-bold text-4xl text-center mt-10 animate-pulse ">
                  {t("loading")}...
                </div>
              ) : null}
              {productsError ? (
                <div className="font-bold text-4xl text-center my-10 text-red-600 ">
                  {t("error")}
                </div>
              ) : null}
              {sizingStatus === "success" &&
              products?.length === 0 &&
              !hasPlusSize ? (
                <div className="font-bold text-4xl text-center my-10 text-red-600 ">
                  {t("There is no products in this size")}
                </div>
              ) : null}
              {products?.length === 0 && hasPlusSize ? (
                <div className="font-bold text-4xl text-center my-10 text-red-600 ">
                  {t("There is no products with plus size")}
                </div>
              ) : null}
            </div>
          </div>
          <div className="sm:flex-1/4">
            <div className="mt-7 flex justify-between items-center">
              <h2 className="text-[24px] font-bold">{t("filter by")}</h2>
              <img src={filter} alt="filterIcon" />
            </div>
            <div className="border-b border-[#1a1a1a]">
              <AccordionComponent
                open={true}
                title={t("Our available items")}
                description={
                  <div>
                    {categories?.map((item) => {
                      return (
                        <label
                          key={item.id}
                          className="cursor-pointer flex gap-2 items-center "
                        >
                          <input
                            checked={selected === item.id}
                            onChange={() => {
                              setSelected(item.id)
                            }}
                            type="radio"
                            className=" bg-[#fffcf9]! shadow-none! rounded-[opx]!"
                          />
                          <h3 className="text-[14px] font-medium">
                            {t(item.name)}
                          </h3>
                        </label>
                      )
                    })}
                    {categoriesLoading ? (
                      <div className="font-bold animate-pulse text-red-600 text-xl">
                        {t("loading")}...
                      </div>
                    ) : null}
                    {categoriesError ? (
                      <div className="font-bold animate-pulse text-red-600 text-[20px]!">
                        {t("error")}
                      </div>
                    ) : null}
                    <Button
                      onClick={() => {
                        setSelected(undefined)
                      }}
                      className="myShadow rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[14px] font-medium"
                      variant={"default"}
                    >
                      {t("all products")}
                    </Button>
                  </div>
                }
              />
            </div>
            <div className="border-b border-[#1a1a1a]">
              <AccordionComponent
                open={true}
                title={t("Determine your exact size")}
                description={
                  <>
                    {determine ? (
                      <>
                        <h3 className="text-[12px] font-semibold mb-3">
                          {t("Now you can know your exact size easily")}
                        </h3>
                        <Button
                          onClick={() => {
                            setDetermine(false)
                          }}
                          className=" myShadow rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[14px] font-medium"
                          variant={"default"}
                        >
                          {t("Add my size")}
                        </Button>
                      </>
                    ) : (
                      <DeterminationSize />
                    )}
                  </>
                }
              />
            </div>
            <div className="border-b  border-[#1a1a1a]">
              <AccordionComponent
                open={true}
                title={t("Dimensions for weights")}
                description={
                  <div>
                    {sizing?.map((item) => {
                      return (
                        <div key={item.id}>
                          {item.code === "free-size" ? (
                            <Button
                              onClick={() => {
                                setSelectedSize(undefined)
                              }}
                              className="myShadow rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[14px] font-medium"
                              variant={"default"}
                            >
                              {t("free_size")}
                            </Button>
                          ) : (
                            <label
                              key={item.id}
                              className="cursor-pointer flex gap-2 items-center "
                            >
                              <input
                                checked={selectedSize === item.id}
                                onChange={() => {
                                  setSelectedSize(item.id)
                                }}
                                type="radio"
                                className=" bg-[#fffcf9]! shadow-none! rounded-[opx]!"
                              />
                              <div className="text-[14px] font-medium">
                                {item.code} ({item.weight})
                              </div>
                            </label>
                          )}
                        </div>
                      )
                    })}
                    {sizingStatus === "pending" ? (
                      <div className="font-bold text-xl text-center animate-pulse ">
                        {t("loading")}...
                      </div>
                    ) : null}
                    {sizingStatus === "error" ? (
                      <div className="font-bold text-xl text-center  text-red-600 ">
                        {t("error")}
                      </div>
                    ) : null}
                  </div>
                }
              />
            </div>
            <div className="flex gap-2 items-center ">
              <input
                checked={hasPlusSize}
                onChange={(e) => {
                  setHasPlusSize(e.target.checked)
                }}
                type="checkbox"
                className="cursor-pointer bg-[#fffcf9]! shadow-none!"
              />
              <h3 id="plus" className="text-[20px] font-medium">
                {t("plus size")}
              </h3>
            </div>
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                className="cursor-pointer bg-[#fffcf9]! shadow-none!"
              />
              <h3 className="text-[20px] font-medium">
                {t("our exclusive offers")}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col sm:hidden">
        <div className={cn("mt-7")}>
          <AccordionComponent
            title={
              <div className="  w-full flex items-baseline  justify-between  ">
                <div>
                  <h1 className="mb-3  text-[16px] font-semibold">
                    {t("shopping.headmob")}
                  </h1>
                </div>

                <div className="flex gap-1 justify-center items-center ">
                  <h2 className="text-[16px] font-medium">{t("filter by")}</h2>
                  <img className="w-5!" src={filter} alt="filterIcon" />
                </div>
              </div>
            }
            open={open}
            description={
              <div className="mb-20">
                <div className="border-b border-[#1a1a1a]">
                  <AccordionComponent
                    open={true}
                    title={t("Our available items")}
                    description={
                      <div>
                        <div>
                          {categories?.map((item) => {
                            return (
                              <label
                                key={item.id}
                                className="cursor-pointer flex gap-2 items-center "
                              >
                                <input
                                  checked={selected === item.id}
                                  onChange={() => {
                                    setSelected(item.id)
                                  }}
                                  type="radio"
                                  className=" bg-[#fffcf9]! shadow-none! rounded-[opx]!"
                                />
                                <h3 className="text-[14px] font-medium">
                                  {t(item.name)}
                                </h3>
                              </label>
                            )
                          })}
                          {categoriesLoading ? (
                            <div className="font-bold animate-pulse text-red-600 text-xl">
                              {t("loading")}...
                            </div>
                          ) : null}
                          {categoriesError ? (
                            <div className="font-bold animate-pulse text-red-600 text-[20px]!">
                              {t("error")}
                            </div>
                          ) : null}
                          <Button
                            onClick={() => {
                              setSelected(undefined)
                            }}
                            className="myShadow rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[14px] font-medium"
                            variant={"default"}
                          >
                            {t("all products")}
                          </Button>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="border-b border-[#1a1a1a]">
                  <AccordionComponent
                    open={true}
                    title={t("Determine your exact size")}
                    description={
                      <div>
                        <h3 className="text-[12px] font-semibold mb-3">
                          {t("Now you can know your exact size easily")}
                        </h3>
                        <Button
                          className="myShadow rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[14px] font-medium"
                          variant={"default"}
                        >
                          {t("Add my size")}
                        </Button>
                      </div>
                    }
                  />
                </div>
                <div className="border-b border-[#1a1a1a]">
                  <AccordionComponent
                    open={true}
                    title={t("Dimensions for weights")}
                    description={
                      <div>
                        {sizing?.map((item) => {
                          return (
                            <div key={item.id}>
                              {item.code === "free-size" ? (
                                <Button
                                  onClick={() => {
                                    setSelectedSize(undefined)
                                  }}
                                  className="myShadow rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[14px] font-medium"
                                  variant={"default"}
                                >
                                  {t("free_size")}
                                </Button>
                              ) : (
                                <label
                                  key={item.id}
                                  className="cursor-pointer flex gap-2 items-center "
                                >
                                  <input
                                    checked={selectedSize === item.id}
                                    onChange={() => {
                                      setSelectedSize(item.id)
                                    }}
                                    type="radio"
                                    className=" bg-[#fffcf9]! shadow-none! rounded-[opx]!"
                                  />
                                  <div className="text-[14px] font-medium">
                                    {item.code} ({item.weight})
                                  </div>
                                </label>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    }
                  />
                </div>
                <div className="flex my-3 gap-2 items-center ">
                  <div className="flex gap-2 items-center ">
                    <input
                      checked={hasPlusSize}
                      onChange={(e) => {
                        setHasPlusSize(e.target.checked)
                      }}
                      type="checkbox"
                      className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                    />
                    <h3 id="plus" className="text-[20px] font-medium">
                      {t("plus size")}
                    </h3>
                  </div>
                </div>
                <div className="flex my-3 gap-2 items-center ">
                  <input
                    type="checkbox"
                    className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                  />
                  <h3 className="text-[20px] font-medium">
                    {t("our exclusive offers")}
                  </h3>
                </div>
                <Button
                  onClick={() => {
                    setOpen(false)
                  }}
                  className="bg-[#ff914c] text-[15px] font-normal my-2 myShadow w-full"
                >
                  {t("Filter Now")}
                </Button>
              </div>
            }
            onToggle={(value) => {
              setOpen(value)
            }}
          />
        </div>
        <div className={cn("mb-20", open ? "hidden" : "flex")}>
          <div className="flex gap-1.5 flex-wrap ">
            {products?.map((item) => {
              return (
                <div key={item.id}>
                  <ProductCard
                    isPlus={item.has_plus_size}
                    newPrice={t(item.price)}
                    oldPrice={t("shop.content.oldPrice")}
                    colors={t("shop.content.colors")}
                    urlImg={item.main_image_url}
                    plusSize={t("shop.content.headTitle")}
                    rate={t("shop.content.headNot")}
                    btnTitle={t("shop.content.btn")}
                    iconUrl={likeIcon}
                    discTitle={t(item.product_name)}
                  />
                </div>
              )
            })}
            {productsLoading ? (
              <div className="font-bold text-4xl text-center mt-10 animate-pulse ">
                {t("loading")}...
              </div>
            ) : null}
            {productsError ? (
              <div className="font-bold text-4xl text-center my-10 text-red-600 ">
                {t("error")}
              </div>
            ) : null}
            {sizingStatus === "success" &&
            products?.length === 0 &&
            !hasPlusSize ? (
              <div className="font-bold text-4xl text-center my-10 text-red-600 ">
                {t("There is no products in this size")}
              </div>
            ) : null}
            {products?.length === 0 && hasPlusSize ? (
              <div className="font-bold text-4xl text-center my-10 text-red-600 ">
                {t("There is no products with plus size")}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
