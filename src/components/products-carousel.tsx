import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselProducts() {
  const imges = [
    "../../src/assets/2d1972ff4929dbf8abc101328c5a2d4d29085e61.jpg",
    "../../src/assets/5bca1585016a940aab1ba1adf8f2f2eb34ed41d6.jpg",
    "../../src/assets/9dec17673afe033eacc3cfa62dc435f0f02432fd.jpg",
    "../../src/assets/9e2cfb595cf1b04ef3ea991f7a9905ff6b59b6d9.jpg",
    "../../src/assets/88dcc6604b9582a59adc93227b99d0fe72191e58.jpg",
    "../../src/assets/70ecfa26776f7e24647dad77d130671d8cb3e762.jpg",
    "../../src/assets/520aecec1e002f77294a1f2029316ae8145bef46.jpg",
    "../../src/assets/148cd6948f633a61024e2162f50a62b4b389e8e0.jpg",
  ]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container max-w-[1350px] m-auto  "
    >
      <CarouselContent>
        {imges.map((index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
            <div className="p-2">
              <Card>
                <CardContent className="p-0 relative ">
                  <img
                    className="object-cover h-[400px] w-[320px]"
                    src={index}
                    alt="img"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
