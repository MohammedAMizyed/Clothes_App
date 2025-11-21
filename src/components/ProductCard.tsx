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
    <Card className="shadow-none border-0 mb-15">
      <CardContent className={"p-0 relative cursor-pointer "}>
        <div className="">
          <div className="relative overflow-hidden rounded-4xl myShadow">
            <img
              className="object-cover  h-[339px] w-[339px]"
              src={urlImg}
              alt="img"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute bg-[#FF914C] overflow-hidden   rounded-bl-[28px] border border-l-2  top-0 flex text-white">
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
            <div className="flex justify-between items-center ">
              <h3 className="text-[24px] font-semibold">{discTitle}</h3>
              <div className="myShadow rounded-[50%] p-2  ">
                <img src={iconUrl} alt="icon" />
              </div>
            </div>
            <div className="flex gap-2 justify-start m-y2">
              <h3 className="text-[#FF914C] text-[25px] font-bold">
                {newPrice}
              </h3>
              <span className="line-through text-[#00000033] text-[18px]">
                {oldPrice}
              </span>
            </div>
            <span className=" text-[#00000033] text-[18px] block">
              {colors}
            </span>
            <Button className="text-[24px] font-semibold w-full rounded-[20px] bg-[#FFFFFF] text-[#FF914C] text-[24px] font-semibold myShadow py-8 cursor-pointer hover:text-white hover:bg-[#FF914C] transition-all duration-200">
              {btnTitle}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
