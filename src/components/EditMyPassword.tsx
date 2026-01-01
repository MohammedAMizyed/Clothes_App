import { Button } from "./ui/button"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
export default function EditMyPassword() {
  const { t } = useTranslation()
  return (
    <div className="sm:py-10 pb-10 sm:px-50 px-10  sm:border sm:border-[#1a1a1a] sm:rounded-3xl sm:myShadow sm:bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {t("SecurityandPassword")}:
      </h2>
      <div>
        <h2 className="text-[12px] font-bold my-4 ">{t("Enteryourphone")}</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <label
          className={cn("mb-5 text-[12px] font-semibold flex flex-col")}
          htmlFor=""
        >
          {t("phoneNumber")}
          <div className={cn("flex  gap-2")}>
            <input
              maxLength={4}
              className="max-w-20 bg-white flex-1/6 outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder="+972"
            />
            <input
              className="bg-white flex-5/6  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder="599634192"
            />
          </div>
        </label>
        <Button className="text-[16px] hover:bg-[#FF914C] w-full py-6 cursor-pointer font-bold rounded-2xl bg-[#FF914C]">
          {t("enterCode")}
        </Button>
      </form>
    </div>
  )
}
