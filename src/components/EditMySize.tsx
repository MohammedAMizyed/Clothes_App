import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { cn } from "@/lib/utils"
import AddNewSize from "./AddNewSize"
export default function EditMySize() {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { t } = useTranslation()
  return (
    <div className="py-10 sm:px-50 px-10 border border-[#1a1a1a] rounded-3xl myShadow bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {isEdit ? t("profile.addNewSizes") : t("profile.sizes")}:
      </h2>
      {isEdit ? (
        <AddNewSize />
      ) : (
        <div className="">
          <div>
            <h2 className="text-[14px] font-bold my-4 text-[#FF0000]">
              {t("havent")}
            </h2>
            <p className="text-[14px] text-bold text-[#FF0000]">
              {t("Enter your size")}
            </p>
          </div>
        </div>
      )}

      <Button
        onClick={() => {
          setIsEdit(!isEdit)
        }}
        className={cn(
          " cursor-pointer text-[16px] w-full my-2 font-bold rounded-2xl bg-[#FF914C] ",
          isEdit ? "hidden!" : "block"
        )}
      >
        {t("addYrSize")}
      </Button>
    </div>
  )
}
