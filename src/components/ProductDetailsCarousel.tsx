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

export default function ProductDetailsCarousel() {
  const { i18n } = useTranslation()
  return (
    <div>
      <Carousel>
        <CarouselContent className="ml-0 cursor-pointer max-w-[460px]">
          <CarouselItem className="w-[460px]">
            <div className="max-w-[432px] overflow-hidden rounded-2xl max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-[460px]">
            <div className="max-w-[432px] overflow-hidden rounded-2xl max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-[460px]">
            <div className="max-w-[432px] overflow-hidden rounded-2xl max-h-[754px]">
              <img
                className="object-cover h-full  w-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="w-[460px]">
            <div className="max-w-[432px] overflow-hidden rounded-2xl max-h-[754px]">
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
