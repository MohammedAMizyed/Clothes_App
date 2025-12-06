import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import { Link } from "react-router-dom"
export default function Error() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <div className="flex gap-5 justify-center flex-col items-center m-10">
        <div className="font-bold sm:text-[40px] text-[#ddd] text-center">
          {t("errorPageMessage")}
        </div>
        <Link to={"/"}>
          <Button variant={"secondary"} className="cursor-pointer font-bold ">
            {t("back")}
          </Button>
        </Link>
      </div>
    </>
  )
}
