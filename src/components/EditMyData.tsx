import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
export default function EditMyData() {
  const { t } = useTranslation()
  return (
    <div className="py-10 px-10  border border-[#1a1a1a] rounded-3xl myShadow bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {t("profile.editmypersonaldata")}:
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="w-full  my-5 flex gap-3  items-center">
          <label
            className="flex text-[12px] font-semibold flex-col flex-1/2"
            htmlFor=""
          >
            {t("firstName")}
            <input
              className=" bg-white  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder={t("First Name")}
            />
          </label>
          <label
            className="flex text-[12px] font-semibold flex-col flex-1/2"
            htmlFor=""
          >
            {t("secondeName")}
            <input
              className="bg-white  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder={t("Seconde Name")}
            />
          </label>
        </div>
        <label
          className="mb-5 text-[12px] font-semibold flex flex-col"
          htmlFor=""
        >
          {t("phoneNumber")}
          <div className="flex  gap-5">
            <input
              className="bg-white flex-5/6  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder="599634192"
            />
            <input
              className="max-w-20 bg-white flex-1/6 outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder="+972"
            />
          </div>
        </label>
        <label
          className="flex text-[12px] font-semibold flex-col mb-5"
          htmlFor=""
        >
          {t("detailsAddresses")}
          <input
            className="bg-white   outline-none myShadow  rounded-2xl p-3"
            type="text"
            placeholder="UAE, Sharjah, Street 8, Building 147"
          />
        </label>
        <h3 className="font-semibold text-[12px] mb-5 cursor-pointer">
          {t("forgetPassword")}?
        </h3>
        <Button
          className="cursor-pointer text-[16px] text-[#ff914c] myShadow rounded-2xl w-full py-6 bg-[#fffcf9]"
          variant={"outline"}
        >
          {t("edit")}
        </Button>
      </form>
    </div>
  )
}
