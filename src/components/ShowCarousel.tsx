import { useTranslation } from "react-i18next"
import exampleImg from "../assets/eximple.jpg"
import likeIcon from "../assets/like.svg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard"

export function ShowCarousel() {
  const { t } = useTranslation()

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container max-w-[1350px] m-auto  "
    >
      <CarouselContent className="select-none ">
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
        <CarouselItem className=" basis-1/4 pl-4">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
