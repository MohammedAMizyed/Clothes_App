import { useTranslation } from "react-i18next"
import exampleImg from "../assets/eximple.jpg"
import likeIcon from "../assets/like.svg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard"

export function ShowCarousel({
  title,
  seeMore,
}: {
  title: string
  seeMore: string
}) {
  const { t } = useTranslation()

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container  max-w-[1350px] m-auto  "
    >
      <div className="flex justify-between items-center">
        <h3 className="sm:text-[40px] text-[14px] sm:font-bold font-normal ">
          {title}
        </h3>
        <span className="underline text-[#006FFF]">{seeMore}</span>
      </div>
      <CarouselContent className="select-none gap-2 ml-2 sm:ml-0">
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
          <ProductCard
            newPrice={t("shop.content.price")}
            oldPrice={t("shop.content.oldPrice")}
            colors={t("shop.content.colors")}
            urlImg={exampleImg}
            plusSize={t("shop.content.headTitle")}
            rate={t("shop.content.headNot")}
            btnTitle={t("shop.content.btn")}
            iconUrl={likeIcon}
            discTitle={t("shop.content.title")}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
