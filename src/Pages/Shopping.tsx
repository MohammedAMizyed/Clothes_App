import Header from "@/components/Header"
import shoppingImg from "../assets/landingShoppingPage.svg"
import { useTranslation } from "react-i18next"
import ProductCard from "@/components/ProductCard"
import exampleImg from "../assets/eximple.jpg"
import likeIcon from "../assets/like.svg"
import arrow from "../assets/Vector 110.svg"
import filter from "../assets/Vector.svg"
import AccordionComponent from "@/components/AccordionComponent"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { Link } from "react-router-dom"
export default function Shopping() {
  const [open, setOpen] = useState<boolean>(true)
  const { t } = useTranslation()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [])
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
        <div className=" hidden sm:flex items-start justify-center sm:flex-row flex-col-reverse ">
          <div className="sm:flex-3/4">
            <h1 className="mb-3 font-bold text-[35px]">{t("shopping.head")}</h1>
            <div className="flex gap-3 flex-wrap ">
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>{" "}
              <div className="">
                <ProductCard
                  newPrice={t("shop.content.price")}
                  oldPrice={t("shop.content.oldPrice")}
                  colors={t("shop.content.colors")}
                  urlImg={exampleImg}
                  plusSize={t("shop.content.headTitle")}
                  rate={t("shop.content.headNot")}
                  btnTitle={t("shop.content.btn")}
                  iconUrl={likeIcon}
                  discTitle={t("shop.content.title")}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex-1/4">
            <div className={cn("flex gap-1 justify-center items-center")}>
              <Link to={"/"}>
                <h2 className="text-[#1a1a1a9d] text-[24px] font-medium cursor-pointer">
                  Home
                </h2>
              </Link>
              <img src={arrow} alt="arrow icon" />
              <h2 className="text-[24px] font-bold">Products</h2>
            </div>
            <div className="mt-7 flex justify-between items-center">
              <h2 className="text-[24px] font-bold">{t("filter by")}</h2>
              <img src={filter} alt="filterIcon" />
            </div>
            <div className="border-b border-[#1a1a1a]">
              <AccordionComponent
                title={t("Our available items")}
                description={
                  <div>
                    <div className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                      />
                      <h3 id="plus" className="text-[14px] font-medium">
                        {t("dresses")}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                      />
                      <h3 id="plus" className="text-[14px] font-medium">
                        {t("travel clothes")}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                      />
                      <h3 id="plus" className="text-[14px] font-medium">
                        {t("winter clothes")}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                      />
                      <h3 id="plus" className="text-[14px] font-medium">
                        {t("swimwear")}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                      />
                      <h3 id="plus" className="text-[14px] font-medium">
                        {t("Hijabs and prayer clothes")}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <input
                        type="checkbox"
                        className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                      />
                      <h3 id="plus" className="text-[14px] font-medium">
                        {t("All available parts")}
                      </h3>
                    </div>
                  </div>
                }
              />
            </div>
            <div className="border-b border-[#1a1a1a]">
              <AccordionComponent
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
            <div className="border-b  border-[#1a1a1a]">
              <AccordionComponent
                title={t("Dimensions for weights")}
                description={
                  <div>
                    <h4 className="text-[14px font-semibold">S ( 45 →55k ) </h4>
                    <h4 className="text-[14px font-semibold">M ( 55 →65k )</h4>
                    <h4 className="text-[14px font-semibold">
                      large (65 →75k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      2X large (80 →85k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      3X large (85 →90k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      4X large (90→95k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      5X large (95→100k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      6X large (100→105k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      7X large (105→110k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      8X large (110→115k)
                    </h4>
                    <h4 className="text-[14px font-semibold">
                      {" "}
                      9X large (115→120k )
                    </h4>
                    <h3 className="text-[20px] font-semibold text-center text-[#ff0000]">
                      FREE SIZE
                    </h3>
                  </div>
                }
              />
            </div>
            <div className="flex gap-2 items-center ">
              <input
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
            description={
              <div className="mb-20">
                <div className="border-b border-[#1a1a1a]">
                  <AccordionComponent
                    title={t("Our available items")}
                    description={
                      <div>
                        <div className="flex gap-2 items-center ">
                          <input
                            type="checkbox"
                            className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                          />
                          <h3 id="plus" className="text-[14px] font-medium">
                            {t("dresses")}
                          </h3>
                        </div>
                        <div className="flex gap-2 items-center ">
                          <input
                            type="checkbox"
                            className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                          />
                          <h3 id="plus" className="text-[14px] font-medium">
                            {t("travel clothes")}
                          </h3>
                        </div>
                        <div className="flex gap-2 items-center ">
                          <input
                            type="checkbox"
                            className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                          />
                          <h3 id="plus" className="text-[14px] font-medium">
                            {t("winter clothes")}
                          </h3>
                        </div>
                        <div className="flex gap-2 items-center ">
                          <input
                            type="checkbox"
                            className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                          />
                          <h3 id="plus" className="text-[14px] font-medium">
                            {t("swimwear")}
                          </h3>
                        </div>
                        <div className="flex gap-2 items-center ">
                          <input
                            type="checkbox"
                            className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                          />
                          <h3 id="plus" className="text-[14px] font-medium">
                            {t("Hijabs and prayer clothes")}
                          </h3>
                        </div>
                        <div className="flex gap-2 items-center ">
                          <input
                            type="checkbox"
                            className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                          />
                          <h3 id="plus" className="text-[14px] font-medium">
                            {t("All available parts")}
                          </h3>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="border-b border-[#1a1a1a]">
                  <AccordionComponent
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
                    title={t("Dimensions for weights")}
                    description={
                      <div>
                        <h4 className="text-[14px font-semibold">
                          S ( 45 →55k ){" "}
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          M ( 55 →65k )
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          large (65 →75k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          2X large (80 →85k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          3X large (85 →90k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          4X large (90→95k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          5X large (95→100k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          6X large (100→105k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          7X large (105→110k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          8X large (110→115k)
                        </h4>
                        <h4 className="text-[14px font-semibold">
                          {" "}
                          9X large (115→120k )
                        </h4>
                        <h3 className="text-[20px] font-semibold text-center text-[#ff0000]">
                          FREE SIZE
                        </h3>
                      </div>
                    }
                  />
                </div>
                <div className="flex my-3 gap-2 items-center ">
                  <input
                    type="checkbox"
                    className="cursor-pointer bg-[#fffcf9]! shadow-none!"
                  />
                  <h3 id="plus" className="text-[20px] font-medium">
                    {t("plus size")}
                  </h3>
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
                <Button className="bg-[#ff914c] text-[15px] font-normal my-2 myShadow w-full">
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
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>{" "}
            <div className="">
              <ProductCard
                newPrice={t("shop.content.price")}
                oldPrice={t("shop.content.oldPrice")}
                colors={t("shop.content.colors")}
                urlImg={exampleImg}
                plusSize={t("shop.content.headTitle")}
                rate={t("shop.content.headNot")}
                btnTitle={t("shop.content.btn")}
                iconUrl={likeIcon}
                discTitle={t("shop.content.title")}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
