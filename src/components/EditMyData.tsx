import { Button } from "./ui/button"
import { useMe } from "@/hooks/useMe"
import { useEditMyData } from "@/hooks/useEditMyInfo"
import { useForm, type SubmitHandler } from "react-hook-form"
import z from "zod"
import { useTranslation } from "react-i18next"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTost } from "@/context/TostContext"
export default function EditMyData() {
  const { t } = useTranslation()
  const { data: me } = useMe()
  const firstName = me?.data.name
  const firstPhone = me?.data.phone.slice(0, 4)
  const secondPhone = me?.data.phone.slice(4)
  const address = me?.data.address
  const meSchema = z.object({
    firstName: z.string().min(1, t("the first name is required")),
    secondName: z.string().min(1, t("the second nama is requierd")),

    firstPhone: z
      .string()
      .regex(/^\d+$/, t("phone must contain numbers only"))
      .min(9, t("the phone must be at least 9 numbers long")),
    firstIntroPhone: z.string().min(1, t("logIn.errorIntr")),
    allAddresses: z.string().min(1, t("addressesRequierf")),
  })
  type meSchemaType = z.infer<typeof meSchema>

  const { mutate } = useEditMyData()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<meSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(meSchema),
  })
  const { handleShowMessage } = useTost()
  const onSubmit: SubmitHandler<meSchemaType> = (data) => {
    console.log(data)
    const name = data.firstName + " " + data.secondName
    mutate(name, {
      onSuccess: (res) => {
        console.log(res)
        handleShowMessage(
          <>
            {t("addSec")}
            <></>
          </>
        )
      },
    })
    reset()
  }
  return (
    <div className="sm:py-10 pb-10 px-10  sm:border sm:border-[#1a1a1a] sm:rounded-3xl sm:myShadow sm:bg-white flex-3/4  overflow-hidden font-semibold text-[20px]">
      <h2 className="text-start pb-4 text-[20px] font-semibold border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]">
        {" "}
        {t("profile.editmypersonaldata")}:
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full  my-5 sm:flex gap-3  items-center">
          <label
            className="flex sm:mb-0 mb-5 text-[12px] font-semibold flex-col flex-1/2"
            htmlFor=""
          >
            {t("firstName")}
            <input
              {...register("firstName")}
              className=" bg-white  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder={firstName}
            />
          </label>
          <label
            className="flex text-[12px] font-semibold flex-col flex-1/2"
            htmlFor=""
          >
            {t("secondeName")}
            <input
              {...register("secondName")}
              className="bg-white  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder={t("Seconde Name")}
            />
          </label>
        </div>
        <div className="flex items-center gap-2 ">
          {errors.firstName && (
            <span className="text-[#d10404] text-[15px] block">
              {errors.firstName.message}
            </span>
          )}
          {errors.secondName && "|||"}
          {errors.secondName && (
            <span className="text-[#d10404] text-[12px] sm:text-[15px] block">
              {errors.secondName.message}
            </span>
          )}
        </div>
        <label
          className="mb-5 text-[12px] font-semibold flex flex-col"
          htmlFor=""
        >
          {t("phoneNumber")}
          <div className="flex  gap-2">
            <input
              className="max-w-20 bg-white flex-1/6 outline-none myShadow  rounded-2xl p-3"
              type="text"
              maxLength={4}
              placeholder={firstPhone}
              {...register("firstIntroPhone")}
            />
            <input
              className="bg-white flex-5/6  outline-none myShadow  rounded-2xl p-3"
              type="text"
              placeholder={secondPhone}
              {...register("firstPhone")}
            />
          </div>
        </label>
        <div className="flex flex-row-reverse justify-center  text-[12px] sm:text-[15px] gap-5 sm:gap-10 mt-2">
          {errors.firstIntroPhone && (
            <span className="text-[#d10404] ">
              {errors.firstIntroPhone.message}
            </span>
          )}
          {errors.firstIntroPhone && errors.firstPhone ? "| | |" : ""}{" "}
          {errors.firstPhone && (
            <span className="text-[#d10404] ">
              {errors.firstPhone?.message}
            </span>
          )}
        </div>
        <label className="flex text-[12px] font-semibold flex-col mb-5">
          {t("detailsAddresses")}
          <input
            className="bg-white   outline-none myShadow  rounded-2xl p-3"
            type="text"
            placeholder={address}
            {...register("allAddresses")}
          />
        </label>
        {errors.allAddresses && (
          <span className="text-[#d10404] m-2 text-[15px] block mb-3 ">
            {errors.allAddresses.message}
          </span>
        )}
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
