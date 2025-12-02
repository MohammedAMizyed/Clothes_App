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
      className="w-full select-none"
    >
      <CarouselContent className=" sm:h-[650px] h-[335px] mb-4 flex flex-col  ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="cursor-pointer basis-1/3 md:basis-1/5 "
          >
            <div className=" sm:w-[145px] w-[85px] h-[101px] sm:h-[167px] ">
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
