import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import ProductDetailsImg from "../assets/product detauls.jpg"
import { useProducts } from "@/hooks/useProducts"
import { useParams } from "react-router-dom"
export default function ProductDetailsCarousel() {
  const { id } = useParams()
  const { data, isLoading, error } = useProducts()
  const { i18n, t } = useTranslation()
  if (isLoading) {
    return (
      <div className="text-[40px] font-bold text-red-600 my-20 flex justify-center items-center">
        {t("error")}
      </div>
    )
  }
  if (error) {
    return (
      <div className="font-bold text-[40px] flex justify-center items-centers my-20 animate-pulse ">
        {t("loading")}...
      </div>
    )
  }
  return (
    <div className="select-none">
      <Carousel>
        <CarouselContent className="ml-0 cursor-pointer max-w-[259px] sm:max-w-[460px]">
          {data?.map((item) => {
            if (Number(item.id) == Number(id)) {
              return (
                <CarouselItem key={item.id} className="w-[460px]">
                  <div className="sm:max-w-[432px] max-w-[259px] overflow-hidden rounded-2xl max-h-[335px] sm:max-h-[754px]">
                    <img
                      className="object-cover h-full  w-full"
                      src={item.main_image_url}
                      alt="img"
                    />
                  </div>
                </CarouselItem>
              )
            }
          })}
          <CarouselItem className="w-[460px]">
            <div className="sm:max-w-[432px] max-w-[259px] overflow-hidden rounded-2xl max-h-[335px] sm:max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-[460px]">
            <div className="sm:max-w-[432px] max-w-[259px] overflow-hidden rounded-2xl max-h-[335px] sm:max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-[460px]">
            <div className="sm:max-w-[432px] max-w-[259px] overflow-hidden rounded-2xl max-h-[335px] sm:max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="w-[460px]">
            <div className="sm:max-w-[432px] max-w-[259px] overflow-hidden rounded-2xl max-h-[335px] sm:max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className={cn(
            "absolute",
            i18n.language === "ar" ? " left-8" : "left-2"
          )}
        />
        <CarouselNext
          className={cn(
            "absolute ",
            i18n.language === "ar" ? "right-8" : "right-16"
          )}
        />
      </Carousel>
    </div>
  )
}
