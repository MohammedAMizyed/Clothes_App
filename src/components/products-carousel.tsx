import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselProducts() {
  const { t } = useTranslation()
  type imgesTypes = {
    id: number
    url: string
    ptn: string
    title: string
  }
  const imges: imgesTypes[] = [
    {
      id: 0,
      url: "../../src/assets/2d1972ff4929dbf8abc101328c5a2d4d29085e61.jpg",
      title: t("carousel.title"),
      ptn: t("carousel.ptn"),
    },
    {
      id: 1,
      url: "../../src/assets/5bca1585016a940aab1ba1adf8f2f2eb34ed41d6.jpg",
      title: t("carousel.title2"),
      ptn: t("carousel.ptn"),
    },
    {
      id: 2,
      url: "../../src/assets/9dec17673afe033eacc3cfa62dc435f0f02432fd.jpg",
      title: t("carousel.title3"),
      ptn: t("carousel.ptn"),
    },

    {
      id: 5,
      url: "../../src/assets/70ecfa26776f7e24647dad77d130671d8cb3e762.jpg",
      title: t("carousel.title4"),
      ptn: t("carousel.ptn"),
    },
    {
      id: 6,
      url: "../../src/assets/520aecec1e002f77294a1f2029316ae8145bef46.jpg",
      title: t("carousel.title5"),
      ptn: t("carousel.ptn"),
    },
  ]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full container max-w-[1350px] m-auto  "
    >
      <CarouselContent>
        {imges.map((box) => (
          <CarouselItem key={box.id} className="md:basis-1/2 lg:basis-1/4  ">
            <div className="p-2">
              <Card>
                <CardContent className="p-0 relative ">
                  <img
                    className="object-cover h-[400px] w-[320px]"
                    src={box.url}
                    alt="img"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute text-center top-[50%] left-[50%] transform-[translate(-50%,-50%)]">
                    <p className="text-white sm:text-[30px] font-medium mb-2">
                      {box.title}
                    </p>
                    <Button className="bg-[#FFFCF9] rounded-[16px] hover:bg-[#e8e6e6] cursor-pointer hover:myShadow text-[#FF914C] sm:text-[20px] py-6 px-5  font-semibold">
                      {box.ptn}
                    </Button>
                  </div>
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
