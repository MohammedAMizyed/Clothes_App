import { CarouselProducts } from "@/components/products-carousel"
import Header from "../components/Header"
import Landing from "../components/Landing"
import Size from "../components/Size"

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Size />
      <div>Home Page</div>
      <CarouselProducts />
    </>
  )
}
