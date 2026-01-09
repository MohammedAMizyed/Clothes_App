/* eslint-disable react-hooks/immutability */
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import loginIcon from "../assets/loginAccount.svg"
import register from "../assets/addnewaccount.svg"
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
import profileImg from "../assets/profiel.svg"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation()
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(i18n.language)
  }, [])
  function handleChangeLang() {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("ar")
    }
  }
  const handleLogOutClick = () => {
    localStorage.removeItem("accessToken")
    window.location.reload()
  }
  return (
    <div
      className={cn(
        "m-4 sm:relative absolute z-20 w-full mx-auto",
        location.pathname === "/products" ||
          location.pathname === "/shoppingCart" ||
          location.pathname === "/favorite" ||
          location.pathname === "/profile" ||
          /\/products\/\d+$/.test(location.pathname)
          ? "sm:absolute"
          : "sm:relative"
      )}
    >
      <div className="container">
        <div className="bg-[#fffcf9] myShadow border-[#f2dfc7] border flex items-center justify-between sm:justify-center px-5  py-2 sm:rounded-[25px] rounded-[12px]">
          <Link to={"/"}>
            <div className=" select-none block sm:hidden w-[25px] h-[18px]">
              <img src={logoAlt} className="w-full h-full" alt="logo" />
            </div>
          </Link>
          <div className="flex flex-row-reverse gap-3 sm:hidden relative">
            <Popover>
              <PopoverTrigger>
                <img
                  className="flex justify-center "
                  src={ListIcon}
                  alt="listIcon"
                />
              </PopoverTrigger>
              <PopoverContent
                className={cn(
                  "p-0 border-2 overflow-hidden mt-4 rounded-2xl absolute max-w-[150px]  border-[#f3e0c8]",
                  i18n.language === "ar" ? "-left-6" : " -left-30"
                )}
              >
                {localStorage.getItem("accessToken") ? (
                  <div className="flex flex-col justify-start ">
                    <Link to={"/shoppingCart"}>
                      <Button
                        variant={"ghost"}
                        className={cn(
                          `cursor-pointer text-[16px] w-full  flex  font-bold rounded-none  border-b-2 border-[#f3e0c8] `,
                          "h-11",
                          "h-11",
                          i18n.language === "en"
                            ? "justify-end"
                            : "justify-start"
                        )}
                      >
                        {t("My Orders")}
                      </Button>
                    </Link>
                    <Link to={"/profile"}>
                      <Button
                        className={cn(
                          "cursor-pointer text-[16px] w-full text-end flex  border-b-2 border-[#f3e0c8] font-bold rounded-none ",
                          "h-11",
                          i18n.language === "en"
                            ? "justify-end"
                            : "justify-start"
                        )}
                        variant="ghost"
                      >
                        {t("My Profile")}
                      </Button>
                    </Link>

                    <Button
                      onClick={handleLogOutClick}
                      className={cn(
                        "cursor-pointer text-[16px] w-full text-end flex  font-bold rounded-none ",
                        "h-11",
                        "h-11",
                        i18n.language === "en" ? "justify-end" : "justify-start"
                      )}
                      variant="ghost"
                    >
                      {t("Log Out")}
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col    ">
                    <Link to={"/login"}>
                      <Button
                        className={cn(
                          `cursor-pointer border-b-2 flex  justify-start  w-full rounded-none border-[#f3e0c8]  bg-white text-black text-[12px] font-normal`,
                          "h-11"
                        )}
                      >
                        <img src={loginIcon} alt="loginIcon" />
                        {t("login")}
                      </Button>
                    </Link>
                    <Link to={"/signup"}>
                      <Button
                        className={cn(
                          "cursor-pointer bg-white text-black text-[12px] font-normal  ",
                          "h-11"
                        )}
                        variant="default"
                      >
                        <img src={register} alt="loginIcon" />
                        {t("addAccount")}
                      </Button>
                    </Link>
                  </div>
                )}
              </PopoverContent>
            </Popover>
            <span
              onClick={handleChangeLang}
              className="cursor-pointer text-[14px] flex font- bold gap-1 justify-center items-center"
            >
              <img className="w-5" src={WorldIcon} alt="WorldIcon" />
              {i18n.language == "ar" ? "EN" : "AR"}
            </span>
          </div>
          <div className="sm:block hidden flex-1/3">
            <div className=" flex gap-2 items-center">
              <Tooltip>
                <TooltipTrigger>
                  <span
                    onClick={handleChangeLang}
                    className="cursor-pointer flex font- bold gap-1 justify-center items-center"
                  >
                    <img src={WorldIcon} alt="WorldIcon" />
                    {i18n.language == "ar" ? "EN" : "AR"}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("changeLang")}</p>
                </TooltipContent>
              </Tooltip>

              <Link to={"/favorite"}>
                <Tooltip>
                  <TooltipTrigger>
                    <span>
                      <img
                        src={HardIcon}
                        className="cursor-pointer"
                        alt="HardIcon"
                      />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("Go to Favorite page")}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
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
          <div className="select-none sm:flex justify-center hidden  flex-1/3">
            <Link to={"/"}>
              <Tooltip>
                <TooltipTrigger>
                  <img className="cursor-pointer" src={logo} alt="logo" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("gotohome")}</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
          <div className="sm:block hidden  flex-1/3 ">
            {localStorage.getItem("accessToken") ? (
              <div className="flex justify-end">
                <Popover>
                  <PopoverTrigger>
                    <img
                      className="cursor-pointer relative"
                      src={profileImg}
                      alt="profileImg"
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    className={cn(
                      "myShadow bg-[#fffcf9] overflow-hidden border-2 rounded-2xl absolute  md:max-w-[150px] lg:max-w-[190px] p-0  border-[#f3e0c8]",
                      i18n.language === "en" ? "-left-40 " : "-left-6"
                    )}
                  >
                    <div className="flex flex-col justify-start ">
                      <Link to={"/shoppingCart"}>
                        <Button
                          variant={"ghost"}
                          className={cn(
                            `cursor-pointer text-[16px] w-full  flex  font-bold rounded-none  border-b-2 border-[#f3e0c8] `,
                            "h-11",
                            "h-11",
                            i18n.language === "en"
                              ? "justify-end"
                              : "justify-start"
                          )}
                        >
                          {t("My Orders")}
                        </Button>
                      </Link>
                      <Link to={"/profile"}>
                        <Button
                          className={cn(
                            "cursor-pointer text-[16px] w-full text-end flex  border-b-2 border-[#f3e0c8] font-bold rounded-none ",
                            "h-11",
                            i18n.language === "en"
                              ? "justify-end"
                              : "justify-start"
                          )}
                          variant="ghost"
                        >
                          {t("My Profile")}
                        </Button>
                      </Link>

                      <Button
                        onClick={handleLogOutClick}
                        className={cn(
                          "cursor-pointer text-[16px] w-full text-end flex  font-bold rounded-none ",
                          "h-11",
                          "h-11",
                          i18n.language === "en"
                            ? "justify-end"
                            : "justify-start"
                        )}
                        variant="ghost"
                      >
                        {t("Log Out")}
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
