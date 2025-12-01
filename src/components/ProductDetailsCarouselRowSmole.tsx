import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import exampleImg from "../assets/product detauls.jpg"

export function ProductDetailsCarouselRowSmole() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" cursor-pointer md:basis-1/2 lg:basis-1/12 -ml-1"
          >
            <div className="relative rounded-[10px] h-[59px] max-w-[59px] overflow-hidden m-1">
              <img
                className="object-cover h-full w-full"
                src={exampleImg}
                alt="exampleImg"
              />
              {/* <div className="absolute inset-0 bg-black/40"></div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
