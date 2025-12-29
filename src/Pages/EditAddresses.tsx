import { useTranslation } from "react-i18next"
import { z } from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"

import { useAddress } from "../hooks/useAddress"
export default function EditAddresses() {
  const { t } = useTranslation()
  const addressSchema = z.object({
    firstName: z.string().min(1, t("the first name is required")),
    secondName: z.string().min(1, t("the second nama is requierd")),

    firstPhone: z
      .string()
      .regex(/^\d+$/, t("phone must contain numbers only"))
      .min(9, t("the phone must be at least 9 numbers long")),
    secondPhone: z
      .string()
      .regex(/^\d+$/, t("phone must contain numbers only"))

      .min(9, t("the phone must be at least 9 numbers long")),
    firstIntroPhone: z.string().min(1, t("logIn.errorIntr")),
    secondIntroPhone: z.string().min(1, t("logIn.errorIntr")),
    emirate: z.string().min(1, t("logIn.errorIntr")),
    area: z.string().min(1, t("areaRequierd")),
    allAddresses: z.string().min(1, t("addressesRequierf")),
  })
  type addressSchemaType = z.infer<typeof addressSchema>
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<addressSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(addressSchema),
  })
  const { mutate } = useAddress()
  const onSubmit: SubmitHandler<addressSchemaType> = (data) => {
    console.log(data)

    mutate(
      { address: data.allAddresses, region_id: "2" },
      {
        onSuccess: (res) => {
          console.log(res)
        },
      }
    )
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full  mt-5 sm:flex gap-3  items-center">
        <label
          className="flex sm:mb-0 mb-5 text-[12px] font-semibold flex-col flex-1/2"
          htmlFor=""
        >
          {t("firstName")}
          <input
            {...register("firstName")}
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
          <span className="text-[#d10404] text-[15px] block">
            {errors.secondName.message}
          </span>
        )}
      </div>
      <label
        className="mt-5 text-[12px] font-semibold flex flex-col"
        htmlFor=""
      >
        {t("phoneNumber")}
        <div className="flex  gap-2">
          <input
            {...register("firstIntroPhone")}
            className="max-w-20 bg-white flex-1/6 outline-none myShadow  rounded-2xl p-3"
            type="text"
            maxLength={4}
            placeholder="+972"
          />
          <input
            {...register("firstPhone")}
            className=" bg-white flex-5/6  outline-none myShadow  rounded-2xl p-3"
            type="text"
            placeholder="599634192"
          />
        </div>
        <div className="flex flex-row-reverse text-[15px] gap-10 mt-2">
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
      </label>
      <label
        className="mt-5 text-[12px] font-semibold flex flex-col"
        htmlFor=""
      >
        {t("anotherPhoneNumber")}
        <div className="flex  gap-2">
          <input
            {...register("secondIntroPhone")}
            className="max-w-20 bg-white flex-1/6 outline-none myShadow  rounded-2xl p-3"
            type="text"
            placeholder="+972"
            maxLength={4}
          />
          <input
            {...register("secondPhone")}
            className=" bg-white flex-5/6  outline-none myShadow  rounded-2xl p-3"
            type="text"
            placeholder="599634192"
          />
        </div>
      </label>
      <div className="flex flex-row-reverse gap-10  text-[15px]  mt-2">
        {errors.firstIntroPhone && (
          <span className="text-[#d10404]">
            {errors.firstIntroPhone.message}
          </span>
        )}
        {errors.firstIntroPhone && errors.firstPhone ? "| | |" : ""}{" "}
        {errors.firstPhone && (
          <span className="text-[#d10404] ">{errors.firstPhone?.message}</span>
        )}
      </div>
      <label
        className="flex text-[12px] font-semibold flex-col mt-5"
        htmlFor=""
      >
        {t("amarah")}
        <input
          {...register("emirate")}
          className="bg-white   outline-none myShadow  rounded-2xl p-3"
          type="text"
          placeholder={t("Sharjah")}
        />
      </label>
      {errors.emirate && (
        <span className="text-[#d10404] m-2 text-[15px] block mb-3 ">
          {errors.emirate.message}
        </span>
      )}
      <label
        className="flex text-[12px] font-semibold flex-col mt-5"
        htmlFor=""
      >
        {t("theAreaa")}
        <input
          {...register("area")}
          className="bg-white   outline-none myShadow  rounded-2xl p-3"
          type="text"
          placeholder={t("asamey")}
        />
      </label>
      {errors.area && (
        <span className="text-[#d10404] m-2 text-[15px] block mb-3 ">
          {errors.area.message}
        </span>
      )}
      <label
        className="flex text-[12px] font-semibold flex-col mt-5"
        htmlFor=""
      >
        {t("allAddresses")}
        <input
          {...register("allAddresses")}
          className="bg-white   outline-none myShadow  rounded-2xl p-3"
          type="text"
          placeholder={t("address")}
        />
      </label>
      {errors.allAddresses && (
        <span className="text-[#d10404] m-2 text-[15px] block">
          {errors.allAddresses.message}
        </span>
      )}
      <Button
        variant={"outline"}
        className={cn(
          "p-7 flex mt-5 text-[#FF914C]   rounded-2xl  justify-center cursor-pointer w-full border-b border-l-0 border-r-0 border-t-0 border-[#f3e0c8]",
          "text-[16px] font-semibold bg-[#fffcf9] hover:bg-[#fffcf8] hover:text-[#ff914cd0]"
        )}
      >
        {t("addAddresses")}
      </Button>
    </form>
  )
}
