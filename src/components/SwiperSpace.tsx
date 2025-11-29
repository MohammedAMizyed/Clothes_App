// Import Swiper React components
import { useTranslation } from "react-i18next"
import { Swiper, SwiperSlide } from "swiper/react"
import img2 from "../assets/0604bf6ab75107e8aaf40a5984218b19a4731b74.jpg"
import img5 from "../assets/4b05ed73ff86a86ca7051bba7a04523c37ef7060.jpg"
import img from "../assets/55a7921d1f7dec89c9c0d1233763d3a6438aba1b.jpg"
import img3 from "../assets/71ec5c5de3969908e10f77899d899ab3bec18ca2.jpg"
import img4 from "../assets/755a4739fc487efeded9b2e99a482698c41c3c62.jpg"
import takit from "../assets/Group (0000).svg"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"

// import required modules
import { EffectCoverflow } from "swiper/modules"

export default function SwiperSpace() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        modules={[EffectCoverflow]}
        spaceBetween={20}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 35,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {[img, img2, img3, img4, img5, img, img2, img3, img4, img5].map(
          (url, index) => {
            return (
              <SwiperSlide key={index} className="w-[150px]! lg:w-[300px]!">
                <div className="relative shadow-none rounded-3xl border-4 myShadow border-white overflow-hidden ">
                  <img
                    className="w-full h-full object-cover"
                    src={url}
                    alt="img"
                  />
                  <div className="absolute top-5 -right-9 pr-1 ">
                    <div className="text-white text-[16px] font-bold rounded-tl-[28px] p-2   bg-[#FF914C] px-[15px] -rotate-90">
                      {t("pluseSize")}
                    </div>
                  </div>
                  <div className="absolute -top-2 right-10">
                    <img className="" src={takit} alt="icon" />
                  </div>
                </div>
              </SwiperSlide>
            )
          }
        )}
      </Swiper>
    </div>
  )
}
