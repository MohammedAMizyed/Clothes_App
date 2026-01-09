import { CarouselProducts } from "@/components/products-carousel"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Size from "../components/Size"
import Footer from "../components/Footer"
import { ShowCarousel } from "@/components/ShowCarousel"
import { useTranslation } from "react-i18next"
import SliderAlt from "@/components/SliderAlt"
import { ShowFeaturedProducts } from "@/components/ShowFeaturedProducts"

export default function Home() {
  const { t } = useTranslation()
  return (
    <div>
      <Header />
      <Landing />
      <CarouselProducts />
      <SliderAlt />
      <Size />
      <ShowCarousel title={t("shop.title")} />
      <ShowFeaturedProducts title={t("shop.title2")} />
      <ShowCarousel title={t("shop.title3")} />
      <Footer />
    </div>
  )
}
