import { CarouselProducts } from "@/components/products-carousel"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Size from "../components/Size"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <CarouselProducts />
      <Size />
      <Footer />
    </>
  )
}
