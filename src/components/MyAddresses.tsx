import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import noteIcon from "../assets/note.svg"
import { useState } from "react"
import EditAddresses from "@/Pages/EditAddresses"
import { cn } from "@/lib/utils"
export default function MyAddresses() {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { t } = useTranslation()
  return (
    <div className="sm:py-10 pb-10 px-10  sm:border sm:border-[#1a1a1a] sm:rounded-3xl sm:myShadow sm:bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {t("profile.myAddresses")}:
      </h2>
      {isEdit ? (
        <EditAddresses />
      ) : (
        <div>
          <div className="flex gap-2 items-center justify-start my-4">
            <img src={noteIcon} alt="noteIcon" />
            <h2 className=" text-[14px] font-bold text-[#ff0000]">
              {t("addresses.uCan")}
            </h2>
          </div>
          <p className="text-[14px] mb-2 font-normal">
            {t("addresses.paragraph")}
          </p>
          <ul className="ml-10">
            <li className="list-decimal! text-[14px] my-2 font-normal">
              {t("firstList")}
            </li>
            <li className="list-decimal! text-[14px] my-2 font-normal">
              {" "}
              {t("secondList")}
            </li>
            <li className="list-decimal! text-[14px] my-2 font-normal">
              {" "}
              {t("thirdList")}
            </li>
            <li className="list-decimal! text-[14px] my-2 font-normal">
              {" "}
              {t("forthList")}
            </li>
          </ul>
        </div>
      )}

      <Button
        onClick={() => {
          setIsEdit(!isEdit)
        }}
        className={cn(
          "myShadow bg-[#ff914c] text-[16px] font-semibold flex justify-center w-fit m-auto cursor-pointer hover:bg-[#ff914cb0] ",
          isEdit ? "hidden" : "block"
        )}
      >
        {t("addAddress")}
      </Button>
    </div>
  )
}
