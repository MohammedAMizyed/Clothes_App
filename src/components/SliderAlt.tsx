import SwiperSpace from "./SwiperSpace"
import { useTranslation } from "react-i18next"
export default function SliderAlt() {
  const { t } = useTranslation()
  return (
    <div className="container ">
      <div className="">
        <div className="">
          <h1 className="font-bold sm:text-[40px]  max-w-[1150px] m-auto text-[16px] text-center text-[#1A1A1A]">
            {t("swipe.title")}{" "}
          </h1>
          <h2 className=" text-center sm:font-medium  max-w-[1050px] m-auto sm:text-[20px] text-[10px] font-normal text-[#1A1A1A]">
            {t("swipe.disc")}
          </h2>
        </div>
        <SwiperSpace />
      </div>
    </div>
  )
}
