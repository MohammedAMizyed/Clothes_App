import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import exampleImg from "../assets/eximple.jpg"

export function ProductDetailsCarouselRow() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className=" cursor-pointer md:basis-1/2 lg:basis-1/4 -ml-1"
          >
            <div className="relative rounded-2xl overflow-hidden m-1">
              <img
                className="object-cover h-[408px] w-[410px]"
                src={exampleImg}
                alt="exampleImg"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
