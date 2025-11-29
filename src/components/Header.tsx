/* eslint-disable react-hooks/immutability */
import logo from "../assets/Frame 135 (1).svg"
import logoAlt from "../assets/image 1 (1).svg"
import WorldIcon from "../assets/Group 2 (1).svg"
import HardIcon from "../assets/Frame 555 (1).svg"
import SearchIcon from "../assets/Frame 271 (1).svg"
import ListIcon from "../assets/Group 15 (1).svg"
import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation()
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(i18n.language)
    console.log(location)
  }, [])
  function handleChangeLang() {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("ar")
    }
  }

  return (
    <div
      className={cn(
        "m-4 sm:relative absolute z-20 w-full mx-auto",
        location.pathname === "/shopping" ? "sm:absolute" : "sm:relative"
      )}
    >
      <div className="container">
        <div className="bg-[#fffcf9] myShadow border-[#f2dfc7] border flex items-center justify-between sm:justify-center px-5  py-2 sm:rounded-[25px] rounded-[12px]">
          <div className=" block sm:hidden w-[25px] h-[18px]">
            <img src={logoAlt} className="w-full h-full" alt="logo" />
          </div>
          <div className="block sm:hidden">
            <img
              className="flex justify-center "
              src={ListIcon}
              alt="listIcon"
            />
          </div>
          <div className="sm:block hidden flex-1/3">
            <div className=" flex gap-2 items-center">
              <span
                onClick={handleChangeLang}
                className="cursor-pointer flex font- bold gap-1 justify-center items-center"
              >
                <img src={WorldIcon} alt="WorldIcon" />
                {i18n.language == "ar" ? "EN" : "AR"}
              </span>
              <span>
                <img src={HardIcon} alt="HardIcon" />
              </span>
              <div className="relative">
                <img
                  className="absolute top-[50%] transform-[translateY(-50%)] pl-2"
                  src={SearchIcon}
                  alt="SearchIcon"
                />
                <input
                  placeholder={t("header.search")}
                  type="text"
                  className="pl-9 pr-9! placeholder:text-[#1A1A1A] placeholder:font-bold  w-full rounded-[15px] border border-[#b6a896] min-h-[45px] shadow-none! outline-none"
                ></input>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-center hidden  flex-1/3">
            <img src={logo} alt="logo" />
          </div>
          <div className="sm:block hidden  flex-1/3 ">
            <div className="flex gap-2  justify-end">
              <Link to={"/login"}>
                <Button
                  className={cn(
                    `cursor-pointer hover:bg-white myShadow  text-[16px] font-bold rounded-[14px] bg-white text-[#ff914c]`,
                    "h-11"
                  )}
                >
                  {t("header.btn2")}
                </Button>
              </Link>
              <Link to={"/signup"}>
                <Button
                  className={cn(
                    "cursor-pointer hover:bg-[#ff914c] myShadow  bg-[#ff914c] text-[16px] font-bold rounded-[14px] ",
                    "h-11"
                  )}
                  variant="default"
                >
                  {t("header.btn1")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
