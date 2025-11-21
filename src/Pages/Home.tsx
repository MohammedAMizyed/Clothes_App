import { CarouselProducts } from "@/components/products-carousel"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Size from "../components/Size"
import Footer from "../components/Footer"
import { ShowCarousel } from "@/components/ShowCarousel"

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Size />
      <CarouselProducts />

      <ShowCarousel />
      <Footer />
    </div>
  )
}
