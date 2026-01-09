import { useTranslation } from "react-i18next"
import likeIcon from "../assets/like.svg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard"
import { useFeatured } from "@/hooks/useFeatured"
import { Link } from "react-router-dom"
export function ShowFeaturedProducts({ title }: { title: string }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, error } = useFeatured()
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
        <Link to={"/products"}>
          <span className="underline text-[#006FFF]">{t("shop.seeMore")}</span>
        </Link>
      </div>
      {isLoading ? (
        <h1 className="animate-pulse font-bold text-[30px]">
          {t("loading")}...
        </h1>
      ) : (
        <>
          <CarouselContent className="select-none gap-2 ml-2 sm:ml-0">
            {data?.map((item) => {
              return (
                <div key={item.id}>
                  <CarouselItem className="basis-1/3 sm:basis-1/4 sm:pl-4">
                    <ProductCard
                      newPrice={item.price + " " + t("usa")}
                      oldPrice={t("shop.content.oldPrice")}
                      colors={t("shop.content.colors")}
                      urlImg={item.main_image_url}
                      plusSize={t("shop.content.headTitle")}
                      rate={t("shop.content.headNot")}
                      btnTitle={t("shop.content.btn")}
                      iconUrl={likeIcon}
                      discTitle={t(item.product_name)}
                      id={item.id}
                      isFavorite={item.is_favorite}
                    />
                  </CarouselItem>
                </div>
              )
            })}
          </CarouselContent>
        </>
      )}
      {error ? <h1>{t("error")}</h1> : null}
    </Carousel>
  )
}
