import landingImg from "../assets/9e2cfb595cf1b04ef3ea991f7a9905ff6b59b6d9 (1).jpg"
import { Button } from "./ui/button"
import cardIcon from "../assets/card.svg"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
export default function Landing() {
  const { t } = useTranslation()
  return (
    <div className="sm:container m-auto">
      <div className="sm:mt-5 ">
        <div className="relative sm:rounded-3xl sm:max-w-[1470px]  m-auto overflow-hidden">
          <img
            className="w-full sm:h-[720px] h-screen object-cover"
            src={landingImg}
            alt="landingImg"
          />
          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/10 via-black/35 to-black/70"></div>

          <div className="absolute top-[50%] left-[50%]  transform-[translate(-50%,-50%)]  ">
            <h1 className="sm:text-[50px] sm:w-[493px] lg:w-[893px] w-[340px] text-[18px]  font-extrabold text-center sm:text-right  text-white ">
              {t("landing.title")}
            </h1>
            <h3 className="sm:text-[20px] text-[12px] text-center font-medium  text-[#FFFCF9] my-5 ">
              {t("landing.description")}
            </h3>
            <Link to="/products">
              <Button
                className="cursor-pointer hover:bg-white  uppercase! sm:flex! hidden! mt-15!  pb-10! text-[18px]! font-normal! py-6!  px-10! mx-auto! w-fit! rounded-2xl! text-[#FF914C] bg-[#FFFCF9]"
                variant="default"
              >
                {t("landing.btn")}
              </Button>
            </Link>
            <Link to={"/products"}>
              <Button
                className="cursor-pointer hover:bg-white  uppercase! sm:hidden! mt-5! text-[12px]! font-normal! py-6! px-15! mx-auto flex text-center w-fit! rounded-2xl! bg-white! text-[#FF914C]!"
                variant="default"
              >
                {t("landing.btn")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute sm:bottom-[-120px] bottom-20 left-5 rounded-[50%] sm:left-[30px] myShadow p-3 bg-[white]">
          <img src={cardIcon} alt="cardIcon" />
          <span className="absolute -top-1 left-9 bg-[#FF914C] px-2 py-1 text-[10px] rounded-2xl font-bold text-white myShadow">
            330
          </span>
        </div>
      </div>
    </div>
  )
}
