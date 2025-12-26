import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
export default function EditMySize() {
  const { t } = useTranslation()
  return (
    <div className="py-10 px-50  border border-[#1a1a1a] rounded-3xl myShadow bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {t("profile.sizes")}:
      </h2>
      <div>
        <h2 className="text-[14px] font-bold my-4 text-[#FF0000]">
          {t("havent")}
        </h2>
        <p className="text-[14px] text-bold text-[#FF0000]">
          {t("Enter your size")}
        </p>
      </div>
      <Button className="cursor-pointer text-[16px] w-full my-2 font-bold rounded-2xl bg-[#FF914C] ">
        {t("addYrSize")}
      </Button>
    </div>
  )
}
