import "./App.css"
import { Button } from "./components/ui/button"
import { cn } from "./lib/utils"
import { CarouselProducts } from "./components/products-carousel"

function App() {
  const isTrue = false
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button
        className={cn(
          `cursor-pointer ${isTrue ? "bg-red-500" : "bg-amber-400"}`
        )}
      >
        Click me
      </Button>
      <CarouselProducts />
    </div>
  )
}

export default App
