import { t } from "i18next"
import img from "../assets/OBJECTS (2).svg"
import { Button } from "@/components/ui/button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
export default function SignUp() {
  const dataSchema = z
    .object({
      firstName: z.string().min(1, t("SignUp.firstNameE")),
      secondName: z.string().min(1, t("SignUp.secondNameE")),
      country: z.string().min(1, t("SignUp.cuntryE")),
      intro: z.string().min(1, t("SignUp.introE")),
      phone: z.string().min(6, t("SignUp.phoneE")),
      isAgree: z.boolean().refine((v) => v === true, {
        message: t("SignUp.isAgree"),
      }),
      password: z.string().min(6, t("SignUp.passwordE")),
      confirmPassword: z.string().min(1, t("SignUp.passwordConfirmE")),
    })
    .refine((data) => data.password == data.confirmPassword, {
      message: t("SignUp.passwordMatchE"),
      path: ["confirmPassword"],
    })
  type dataSchemaType = z.infer<typeof dataSchema>
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<dataSchemaType>({
    resolver: zodResolver(dataSchema),
    mode: "onBlur",
  })
  const onSubmit: SubmitHandler<dataSchemaType> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className="container">
      <div className="h-screen flex items-center justify-center ">
        <div className="flex gap-5 flex-col items-center sm:flex-row">
          <div className="select-none sm:max-w-[515px] max-w-[145px] sm:max-h-[454px] max-h-[125px]">
            <img className="w-full h-full" src={img} alt="img" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <h1 className="sm:text-[40px] text-[20px] font-bold ">
              {t("signUp.title")}
            </h1>
            <h2 className="sm:text-[24px] text-[14px] sm:font-semibold font-normal sm:px-0 px-3 text-center">
              {t("signUp.description")}
            </h2>
            <form className="min-w-[310px]" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("firstName")}
                placeholder={t("SignUp.firstName")}
                className="block my-4 myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl w-full  "
                type="text"
              />
              {errors.firstName && (
                <span className="text-[#d10404]  ">
                  {errors.firstName.message}
                </span>
              )}
              <input
                {...register("secondName")}
                placeholder={t("SignUp.secondName")}
                className="block my-4 myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl w-full "
                type="text"
              />
              {errors.secondName && (
                <span className="text-[#d10404]  ">
                  {errors.secondName.message}
                </span>
              )}
              <div className="my-4  flex gap-2">
                <input
                  {...register("intro")}
                  placeholder="+972"
                  className=" myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl max-w-[60px] "
                  type="text"
                />{" "}
                <input
                  {...register("phone")}
                  placeholder="0599634192"
                  className=" myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl flex-1 "
                  type="text"
                />
              </div>
              {errors.intro && (
                <span className="text-[#d10404]  ">{errors.intro.message}</span>
              )}
              {errors.phone && errors.phone ? "| | |" : ""}{" "}
              {errors.phone && (
                <span className="text-[#d10404]  ">
                  {errors.phone?.message}
                </span>
              )}
              <input
                {...register("password")}
                placeholder={t("SignUp.password")}
                className="block my-4 myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl w-full "
                type="text"
              />
              {errors.password && (
                <span className="text-[#d10404]  ">
                  {errors.password.message}
                </span>
              )}
              <input
                {...register("confirmPassword")}
                placeholder={t("SignUp.confirmPassword")}
                className="block my-4 myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl w-full "
                type="text"
              />
              {errors.confirmPassword && (
                <span className="text-[#d10404]  ">
                  {errors.confirmPassword.message}
                </span>
              )}
              <input
                {...register("country")}
                placeholder={t("SignUp.Palestine")}
                className="block my-4 myShadow outline-none p-3 bg-white sm:rounded-2xl rounded-xl w-full "
                type="text"
              />
              {errors.country && (
                <span className="text-[#d10404]  ">
                  {errors.country.message}
                </span>
              )}
              <Button
                className={
                  "cursor-pointer bg-[#ff914c] hover:bg-[#ff914cde] w-full! sm:rounded-[16px]! rounded-xl! my-3!"
                }
                variant="default"
              >
                {t("signUp.ptn")}
              </Button>
              <div className="flex justify-center items-center gap-2  sm:font-semibold sm:text-[16px] font-medium text-[10px]  my-2">
                <input
                  {...register("isAgree")}
                  type="checkbox"
                  className="  checked:bg-[#ff914c] checked:text-white  border-2 cursor-pointer mr-2 w-[15px] h-[15px] shadow-none!"
                />
                {t("signUp.doblockUAgree")}
                <span className="text-black font-bo2d">
                  {t("signUp.privacyPolicy")}
                </span>
              </div>
              {errors.isAgree && (
                <span className="text-[#d10404]  ">
                  {errors.isAgree.message}
                </span>
              )}
            </form>
            <div className="text-[#1A1A1A80] text-[12px] font-normal ">
              {t("signUp.haveAccount")}{" "}
              <span className="text-black">{t("sinUp.logNow")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
