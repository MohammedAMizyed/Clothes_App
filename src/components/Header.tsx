import logo from "../assets/Frame 135.svg"
import logoAlt from "../assets/image 1.svg"
import WorldIcon from "../assets/Group 2.svg"
import HardIcon from "../assets/Frame 555.svg"
import SearchIcon from "../assets/Frame 271.svg"
import ListIcon from "../assets/Group 15.svg"
import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
export default function Header() {
  const { t } = useTranslation()
  return (
    <div className="m-4 sm:relative absolute z-20 w-full mx-auto" dir="ltr">
      <div className="container">
        <div className="bg-[#fffcf9] myShadow border-[#f2dfc7] border flex items-center justify-between px-5  py-2 sm:rounded-[25px] rounded-[12px]">
          <div className=" block sm:hidden w-[25px] h-[18px]">
            <img src={logoAlt} className="w-full h-full" alt="logo" />
          </div>
          <div className="block sm:hidden">
            <img src={ListIcon} alt="listIcon" />
          </div>
          <div className="sm:block hidden">
            <div className=" flex gap-2 items-center">
              <span className="flex font- bold gap-1 justify-center items-center">
                <img src={WorldIcon} alt="WorldIcon" />
                EN
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
                  className="pl-9 placeholder:text-[#1A1A1A] placeholder:font-bold  min-w-[353px] rounded-[15px] border border-[#b6a896] min-h-[45px] shadow-none! outline-none"
                ></input>
              </div>
            </div>
          </div>
          <div className="sm:block hidden">
            <img src={logo} alt="logo" />
          </div>
          <div className="sm:block hidden">
            <div className="flex gap-2 ">
              <Button
                className={cn(
                  `myShadow  text-[16px]! font-bold! rounded-[14px]! bg-white! text-[#ff914c]!`
                )}
              >
                {t("header.btn2")}
              </Button>

              <Button
                className={cn(
                  "myShadow!  bg-[#ff914c]! text-[16px]! font-bold! rounded-[14px]! "
                )}
                variant="default"
              >
                {t("header.btn1")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
