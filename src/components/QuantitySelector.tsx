import { Button } from "./ui/button"

type propsType = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}
export default function QuantitySelector({ quantity, setQuantity }: propsType) {
  return (
    <div className="flex p-0   border-2 overflow-hidden rounded-2xl  border-[#f8e0c8] justify-center items-center ">
      <Button
        variant={"ghost"}
        className=" p-3 h-full cursor-pointer text-3xl rounded-none"
        onClick={() => {
          setQuantity(quantity + 1)
        }}
      >
        +
      </Button>
      <div className="px-4 h-full  flex justify-center items-center font-bold border-r-2 border-l-2 border-[#f8e0c8]  text-[18px] ">
        {quantity}
      </div>
      <Button
        className=" p-3 h-full cursor-pointer text-3xl  rounded-none"
        variant={"ghost"}
        onClick={() => {
          setQuantity((pre) => Math.max(1, pre - 1))
        }}
      >
        -
      </Button>
    </div>
  )
}
