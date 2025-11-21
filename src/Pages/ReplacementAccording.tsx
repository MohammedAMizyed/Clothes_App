import Footer from "../components/Footer"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"

export default function ReplacementAccording() {
  const { t } = useTranslation()
  return (
    <>
      <div
        className={cn(
          " mb-20! container m-auto flex items-center justify-center flex-col"
        )}
      >
        <h1 className="my-11 sm:my-7 sm:font-bold font-medium  w-full text-center leading-[100%]  sm:text-[40px] text-[16px]">
          {t("exchangePolicy.title")}{" "}
        </h1>
        <div>
          <p className="mb-10 sm:my-10 font-normal sm:font-semibold sm:leading-[160%] p-2 sm:p-0 leading-[160%] sm:text-[14px] text-[12px] max-w-[324px] sm:max-w-[1172px]">
            {t(`exchangePolicy.description`)} <br />
            {t(`exchangePolicy.commitment`)}
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
