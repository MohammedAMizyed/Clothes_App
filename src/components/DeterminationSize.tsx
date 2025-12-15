import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"

export default function DeterminationSize() {
  const { t } = useTranslation()
  return (
    <div className={`px-10 `}>
      <h3>{t("By measuring the circumference of the hips and chest")}</h3>
      <div className="flex mb-2 items-center justify-between gap-4">
        <h3>{t("Enter your Name")}</h3>
        <input
          className="bg-white outline-none myShadow max-w-[60px] rounded-2xl p-3 py-1"
          type="text"
          placeholder="86cm"
        />{" "}
      </div>
      <div className=" flex mb-2 items-center justify-between gap-4">
        <h3>{t("hip rotation measurement")}</h3>
        <input
          className="bg-white outline-none myShadow max-w-[60px] rounded-2xl p-3 py-1"
          type="text"
          placeholder="86cm"
        />{" "}
      </div>{" "}
      <div className="flex mb-2 items-center justify-between gap-4">
        <h3>{t("hip rotation measurement")}</h3>
        <input
          className="bg-white outline-none myShadow max-w-[60px] rounded-2xl p-3 py-1"
          type="text"
          placeholder="86cm"
        />{" "}
      </div>
      <Button
        className="w-full cursor-pointer myShadow border-none rounded-3xl text-[#ff914c] rounded-2"
        variant={"outline"}
      >
        {t("add")}
      </Button>
    </div>
  )
}
