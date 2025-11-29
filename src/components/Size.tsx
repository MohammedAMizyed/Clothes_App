import sizeImg from "../assets/1225a1e0bdd005e1c291c1fd1a40a10c0cdbab7b (1).jpg"
import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
export default function Size() {
  const { t } = useTranslation()
  return (
    <div className="relative my-10">
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/40 via-black/60 to-black/80"></div>

      <img
        className="object-cover w-full h-[261px] sm:h-[584px]"
        src={sizeImg}
        alt="Img"
      />
      <div className="absolute top-[50%] left-[50%] text-[#FFFCF9] text-center transform-[translate(-50%,-50%)] ">
        <h1 className="mb-3 sm:text-[40px] text-[16px] font-medium sm:font-bold not-[]:">
          {t("size.title2")}
        </h1>
        <h2 className={"sm:text-[22px] sm:font-bold text-[12px] font-normal"}>
          {t("size.discription2")}
        </h2>
        <Link to={"/sizing"}>
          <Button
            variant="default"
            className={
              "cursor-pointer bg-[#FFFCF9]! m-auto! mt-15! py-7! text-[#FF914C]! font-medium! sm:text-[24px]! text-[16px] rounded-2xl! w-fit! sm:px-10! px-7!"
            }
          >
            {t("size.btn2")}
          </Button>
        </Link>
      </div>
    </div>
  )
}
