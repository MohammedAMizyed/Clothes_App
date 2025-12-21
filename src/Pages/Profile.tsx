import Header from "@/components/Header"
import backgroundImg from "../assets/backgroundForProductsDetauls.jpg"
import arrowImg from "../assets/Vector 110.svg"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
export default function Profile() {
  const { t, i18n } = useTranslation()
  const list = [
    t("profile.editmypersonaldata"),
    t("profile.My previous requests"),
    t("profile.Security and Password"),
    t("profile.mySize"),
    t("profile.myAddress"),
  ]

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
        <div className="px-50 mt-20">
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
        <div className="flex justify-center items-center gap-5 my-10">
          <div className="py-7  border border-[#1a1a1a] rounded-3xl myShadow bg-white flex-1/4  overflow-hidden font-semibold text-[20px] ">
            {list.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant={"outline"}
                  className=" p-5 cursor-pointer rounded-none w-full border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]"
                >
                  {item}
                </Button>
              )
            })}
          </div>
          <div className="flex-3/4"></div>
        </div>
      </div>
    </div>
  )
}
