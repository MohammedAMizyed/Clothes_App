import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
type product = {
  urlImg: string
  plusSize: string
  rate: string
  discTitle: string
  iconUrl: string
  newPrice: string
  oldPrice?: string
  colors?: string
  btnTitle?: string
}

export default function ProductCard({
  urlImg,
  plusSize,
  rate,
  discTitle,
  iconUrl,
  newPrice,
  oldPrice,
  colors,
  btnTitle,
}: product) {
  return (
    <Card className="shadow-none border-0 sm:mb-15 ">
      <CardContent className={"p-0 relative cursor-pointer "}>
        <div className="my-2 ml-3">
          <div className="relative overflow-hidden sm:rounded-4xl rounded-2xl myShadow">
            <img
              className="object-cover  sm:h-[339px] h-[125px] w-[140px] sm:w-[339px]"
              src={urlImg}
              alt="img"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="sm:flex hidden absolute bg-[#FF914C] overflow-hidden   rounded-bl-[28px] border border-l-2  top-0  text-white">
              <div className=" bg-black p-2 text-[14px] font-bold  border border-l-2">
                {" "}
                {plusSize}
              </div>
              <span className=" bg-[#FF914C] line-through text-[15px] font-extrabold  p-2">
                {rate}
              </span>
            </div>
          </div>
          <div className="m-2">
            <div className=" mb-2 sm:mb-0 flex justify-between items-center ">
              <h3 className="sm:text-[24px] text-[14px]  font-semibold">
                {discTitle}
              </h3>
              <div className="myShadow rounded-[50%] sm:p-2 p-1 ">
                <img className="w-[16px] sm:w-full" src={iconUrl} alt="icon" />
              </div>
            </div>
            <div className="flex sm:gap-2 gap-1 justify-start m-y2">
              <h3 className="text-[#FF914C] sm:text-[25px] text-[14px] font-bold">
                {newPrice}
              </h3>
              <span className="line-through text-[#00000033] sm:text-[18px] text-[12px]">
                {oldPrice}
              </span>
            </div>
            <span className=" text-[#00000033] sm:text-[18px] text-[12px] block">
              {colors}
            </span>
            <Button className="sm:flex hidden text-[24px] font-semibold w-full rounded-[20px] bg-[#FFFFFF] text-[#FF914C] myShadow py-8 cursor-pointer hover:text-white hover:bg-[#FF914C] transition-all duration-200">
              {btnTitle}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
