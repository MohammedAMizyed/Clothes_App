import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import img from "../assets/55a7921d1f7dec89c9c0d1233763d3a6438aba1b.jpg"
import img2 from "../assets/0604bf6ab75107e8aaf40a5984218b19a4731b74.jpg"
import img3 from "../assets/71ec5c5de3969908e10f77899d899ab3bec18ca2.jpg"
import img4 from "../assets/755a4739fc487efeded9b2e99a482698c41c3c62.jpg"
import img5 from "../assets/4b05ed73ff86a86ca7051bba7a04523c37ef7060.jpg"
import takit from "../assets/Group (0000).svg"
import cart from "../assets/car...svg"
import { useTranslation } from "react-i18next"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// import required modules
import { EffectCards } from "swiper/modules"

export default function SwiperSpace() {
  const { t } = useTranslation()
  return (
    <div className="sm:max-w-[1300px] max-w-[700px] overflow-hidden m-auto">
      <Swiper
        dir="rtl"
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper overflow-hidden w-full sm:max-w-[440px]! max-w-[160px]! select-none mb-10! mt-0! mx-auto! "
        cardsEffect={{
          rotate: false,
          slideShadows: false,
          perSlideOffset: 50,
          perSlideRotate: 0,
        }}
      >
        <div className="absolute left-[50%] transform-[translateX(-50%)] bottom-[-25px] myShadow z-50 bg-[#ff914c] rounded-[50%] p-2 border-4 border-white">
          <img src={cart} alt="img" />
        </div>
        {[img, img2, img3, img4, img5].map((url, index) => {
          return (
            <SwiperSlide key={index} className="shadow-none overflow-visible! ">
              <div className="sm:h-[700px] h-[286px] w-[164px] sm:w-[444px] overflow-clip rounded-3xl myShadow border-5 border-white relative">
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
        })}
      </Swiper>
    </div>
  )
}
