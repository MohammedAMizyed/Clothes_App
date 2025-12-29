import { useTranslation } from "react-i18next"
import { Button } from "./ui/button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
export default function AddNewSize() {
  const { t } = useTranslation()
  const sizeSchema = z.object({
    name: z.string().min(1, t("the name is requierd")),
    chest: z.string().min(1, t("Chestcir")),
    hip: z.string().min(1, t("hipRo")),
  })
  type sizeSchemaType = z.infer<typeof sizeSchema>
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<sizeSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(sizeSchema),
  })
  const onsubmit: SubmitHandler<sizeSchemaType> = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h2 className="text-[14px] font-normal my-4 text-[#FF0000]">
        {t("wory")}
      </h2>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label className="text-[20px] font-semibold">
          {t("enterYrname")}
          <input
            {...register("name")}
            type="text"
            className="text-[15px] myShadow rounded-2xl outline-none px-4 py-3 my-2 w-full "
            placeholder="Noor"
          />
        </label>
        {errors.name && (
          <span className="text-[#d10404] m-2 text-[15px] block mb-3 ">
            {errors.name.message}
          </span>
        )}
        <label className="text-[20px] font-semibold">
          {t("Chestcircumference")}:
          <input
            {...register("chest")}
            type="text"
            className="text-[15px] myShadow rounded-2xl outline-none px-4 py-3 my-2 w-full "
            placeholder="85cm"
          />
        </label>{" "}
        {errors.chest && (
          <span className="text-[#d10404] m-2 text-[15px] block mb-3 ">
            {errors.chest.message}
          </span>
        )}
        <label className="text-[20px] font-semibold">
          {t("Hiprotation")}
          <input
            {...register("hip")}
            type="text"
            className="text-[15px] myShadow rounded-2xl outline-none px-4 py-3 my-2 w-full "
            placeholder="85cm"
          />
        </label>
        {errors.hip && (
          <span className="text-[#d10404] m-2 text-[15px] block mb-3 ">
            {errors.hip.message}
          </span>
        )}
        <Button className="bg-[#FF914C] rounded-2xl text-[15px] font-bold w-full myShadow py-6 cursor-pointer hover:bg-[#ff914cf0] my-2">
          {t("add")}
        </Button>
      </form>
    </div>
  )
}
