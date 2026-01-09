import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useRecentProduct } from "@/hooks/useResentProducts"
export function ProductDetailsCarouselRow() {
  const { data } = useRecentProduct()
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full select-none "
    >
      <CarouselContent>
        {data?.map((item) => (
          <CarouselItem
            key={item.id}
            className=" cursor-pointer md:basis-1/2 lg:basis-1/4 -ml-1"
          >
            <div className="relative rounded-2xl overflow-hidden m-1">
              <img
                className="object-cover h-[408px] w-[410px]"
                src={item.main_image_url}
                alt="img of product"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
