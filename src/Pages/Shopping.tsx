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
export default function Shopping() {
  const { t } = useTranslation()
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
        <div className="sm:block hidden absolute  top-[40%] left-[50%] transform-[translate(-50%,-40%)]">
          <h1 className=" text-center  text-[#FFFCF9] text-[50px] font-bold sm:min-w-[1000px]">
            {t("shopping.title")}
          </h1>
          <p className="text-center text-[#FFFCF9] text-[30px] font-medium">
            {t("shopping.description")}
          </p>
        </div>
        <div className="flex items-start justify-center">
          <div className="flex-3/4">
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
            </div>
          </div>
          <div className="flex-1/4">
            <div className="flex gap-1 justify-center items-center">
              <h2 className="text-[#1a1a1a9d] text-[24px] font-medium">Home</h2>
              <img src={arrow} alt="arrow icon" />
              <h2 className="text-[24px] font-bold">Products</h2>
            </div>
            <div className="mt-7 flex justify-between items-center">
              <h2 className="text-[24px] font-bold">{t("filter by")}</h2>
              <img src={filter} alt="filterIcon" />
            </div>
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
            <AccordionComponent
              title={t("Determine your exact size")}
              description={
                <div>
                  <h3 className="text-[12px] font-semibold mb-3">
                    {t("Now you can know your exact size easily")}
                  </h3>
                  <Button
                    className="rounded-[26px] block m-auto text-center hover:bg-[#ff914c] bg-[#FF914C] cursor-pointer text-[12px] font-medium"
                    variant={"default"}
                  >
                    {t("Add my size")}
                  </Button>
                </div>
              }
            />
            <AccordionComponent
              title={t("Dimensions for weights")}
              description={
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit explicabo aut vitae culpa in, expedita hic enim autem
                  et reprehenderit minima ut praesentium blanditiis eaque quod
                  deleniti beatae laudantium voluptates?
                </div>
              }
            />
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
    </>
  )
}
