import Header from "@/components/Header"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import arrowImg from "../assets/Vector 110.svg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import EditMyData from "@/components/EditMyData"
import PreviousOrders from "@/components/PreviousOrders"
import MyAddresses from "@/components/MyAddresses"
import Footer from "@/components/Footer"
import EditMySize from "@/components/EditMySize"
import EditMyPassword from "@/components/EditMyPassword"
export default function Profile() {
  const { t, i18n } = useTranslation()
  const [activeItem, setActiveItem] = useState<number>(0)
  const list = [
    { id: 0, name: t("profile.editmypersonaldata") },
    { id: 1, name: t("profile.My previous requests") },
    { id: 2, name: t("profile.Security and Password") },
    { id: 3, name: t("profile.mySize") },
    { id: 4, name: t("profile.myAddress") },
  ]
  const handleToggleClick = (id: number) => {
    setActiveItem(id)
  }

  return (
    <div>
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
        <div className="sm:px-40 mt-20">
          <div className="flex flex-row-reverse  justify-between">
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
                className="sm:w-fill max-w-11"
                src={arrowImg}
                alt="arrowIcon"
              />
              <h2 className="sm:text-[24px] text-[17px] font-normal sm:font-bold">
                personal profile
              </h2>
            </div>
            <div>
              <h1 className="font-bold  sm:text-[35px] text-black">
                {t("profile.title")}
              </h1>
            </div>
          </div>
        </div>
        <div className="sm:px-40  flex justify-center items-stretch sm:flex-row flex-col gap-5 my-10">
          <div className="sm:py-10   flex sm:flex-col   border border-[#1a1a1a] rounded-xl sm:rounded-3xl myShadow bg-white flex-1/4  overflow-hidden font-semibold  sm:text-[20px] ">
            {list.map((item, index) => {
              return (
                <Button
                  onClick={() => {
                    handleToggleClick(item.id)
                  }}
                  key={index}
                  variant={"outline"}
                  className={cn(
                    "sm:p-7 py-7  px-1 flex text-[11.5px] sm:text-[20px]   sm:rounded-2xl  rounded-none justify-start cursor-pointer  sm:w-full border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]",
                    activeItem == item.id &&
                      "sm:text-[24px] font-bold bg-[#fffcf9]"
                  )}
                >
                  {item.name}
                </Button>
              )
            })}
          </div>
          <>
            {activeItem === 0 && <EditMyData />}
            {activeItem === 1 && <PreviousOrders />}
            {activeItem === 2 && <EditMyPassword />}
            {activeItem === 3 && <EditMySize />}
            {activeItem === 4 && <MyAddresses />}
          </>
        </div>
      </div>
      <Footer />
    </div>
  )
}
