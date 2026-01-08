import { useTranslation } from "react-i18next"
// import { Button } from "./ui/button"
import img from "../assets/image 1 (1).svg"
import { useCart } from "@/hooks/useMyCart"
export default function PreviousOrders() {
  const { t } = useTranslation()
  const { data } = useCart()
  return (
    <div className="sm:py-10 pb-10 px-10  sm:border sm:border-[#1a1a1a] sm:rounded-3xl sm:myShadow sm:bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {t("profile.mypreviosrequestes")}:
      </h2>
      <div>
        {data?.data.items.map((item, index) => {
          return (
            <div key={item.id} className="flex justify-between items-center ">
              <div className="flex gap-5 items-center ">
                <span className="font-medium rounded-[50%] myShadow flex justify-center items-center text-[12px] w-8 h-8">
                  {index + 1}
                </span>
                <div className="flex items-center gap-5">
                  <img
                    className="w-[80px] h-[77px]"
                    src={item.product.main_image_url}
                    alt={"img"}
                  />
                  <div>
                    <h3 className="text-[16px] font-medium mb-1 ">
                      {item.product.name}
                    </h3>
                    <p className="text-[10px] font-medium text-[#A97C50]">
                      color: white | Size: large
                    </p>
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-medium">
                {" "}
                {data.data.updatedAt}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
