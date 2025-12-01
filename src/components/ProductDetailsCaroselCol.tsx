import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import ProductDetailsImg from "../assets/product detauls.jpg"

export function ProductDetailsCarouselCol() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full h-[655px] "
    >
      <CarouselContent className=" h-[650px] mb-4 flex flex-col  ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" md:basis-1/5 ">
            <div className=" w-[145px] h-[167px] ">
              <img
                className=" rounded-[10px] object-cover w-full h-full"
                src={ProductDetailsImg}
                alt="img"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
