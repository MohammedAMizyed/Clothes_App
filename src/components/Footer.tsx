import FacebookIcon from "../assets/Capa_1.svg"
import InstagramIcon from "../assets/Group (1).svg"
import LinkedInIcon from "../assets/Frame (5).svg"
import logo from "../assets/Frame 135 (1).svg"
import { useTranslation } from "react-i18next"
export default function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <div className="bg-[#E6D1B5]  py-11.5">
        <div className=" container text-[#1A1A1A] m-auto sm:p-0 p-9">
          <div className="mb-2">
            <img className="m-auto sm:m-0" src={logo} alt="logo" />
          </div>
          <div className=" flex flex-wrap justify-between sm:ml-10 items-start">
            <div className="mb-4 ">
              <p className="sm:text-[16px] mb-2 sm:mb-0  text-[12px] sm:max-w-[300px] min-w-[300px] font-normal leading-[160%] ">
                {t("storeInfo.aboutStore")}
              </p>
            </div>
            <div>
              <ul>
                <li className="text-[16px] sm:font-bold sm:mb-0 mb-4 leading-[160%] ">
                  {t("footer.sections")}
                </li>
                <li className="text-[16px] font-normal mb-3 sm:mb-0 leading-[160%] ">
                  {t("footer.dresses")}
                </li>
                <li className="text-[16px] font-normal mb-3 sm:mb-0 leading-[160%]">
                  {t("footer.swimwear")}
                </li>{" "}
                <li className="text-[16px] font-normal mb-3 sm:mb-0 leading-[160%]">
                  {t("footer.travelClothes")}
                </li>
                <li className="text-[16px] font-normal mb-3 sm:mb-0 leading-[160%]">
                  {t("footer.hijabsAndPrayerClothes")}
                </li>
                <li className="text-[16px] font-normal mb-3 sm:mb-0 leading-[160%]">
                  {t("footer.winterClothes")}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="sm:text-[16px] text-[12px]   sm:font-bold leading-[160%] sm:mb-2 mb-4">
                {t("footer.contactUs")}
              </h2>
              <h2 className="sm:text-[16px] text-[12px]   sm:font-bold leading-[160%] sm:mb-2 mb-4">
                alwaha@gmail.com
              </h2>
              <h2 className="sm:text-[16px] text-[12px]   sm:font-bold leading-[160%] sm:mb-2 mb-4">
                +990 120 129 129{" "}
              </h2>
            </div>
            <div className="sm:m-0 m-auto flex">
              <img src={FacebookIcon} alt="FacebookIcon" className="mx-2" />
              <img src={InstagramIcon} alt="InstagramIcon" className="mx-2" />
              <img src={LinkedInIcon} alt="LinkedInIcon" className="mx-2" />
            </div>
          </div>
          <p className="sm:text-[16px] text-[#1A1A1A]  text-[14px] sm:mt-10 leading-[175%] font-semibold">
            {t("footer.footerCopy")}
          </p>
        </div>
      </div>
    </>
  )
}
