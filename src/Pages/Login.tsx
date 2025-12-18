import { Button } from "@/components/ui/button"
import img from "../assets/loginimg.svg"
import { t } from "i18next"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { useLogIn } from "@/hooks/useLogIn"
import { useEffect } from "react"

import * as z from "zod"

export default function LogIn() {
  const userSchema = z.object({
    introduction: z.string().min(1, t("logIn.errorIntr")),
    phone: z
      .string()
      .min(9, t("logIn.errorPhone"))
      .regex(/^[0-9]+$/, t("logIn.errorIntr2")),
    password: z.string().min(6, t("logIn.errorPassword")),
  })
  type userSchemaType = z.infer<typeof userSchema>
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  })
  const navigate = useNavigate()
  const { mutate, isPending, error, data } = useLogIn()
  const onSubmit: SubmitHandler<userSchemaType> = (data) => {
    const fullPhone = data.introduction + data.phone
    const fullData = {
      phone: fullPhone,
      password: data.password,
    }
    mutate(fullData)

    console.log(data)
    reset()
  }
  useEffect(() => {
    console.log(data)
    console.log(data?.message)
    console.log(data?.data)
    const token = data?.data?.accessToken
    if (token) {
      localStorage.setItem("accessToken", token)
    }
    if (data?.message === "Login successful") {
      navigate("/", { replace: true })
    }
  }, [data, navigate])
  //  const onSubmit: SubmitHandler<userSchemaType> = (data) => {
  //   reset()
  // }

  return (
    <div className="container">
      <div className="h-screen flex justify-center text-[#1A1A1A]">
        <div className="flex justify-center items-center gap-5 flex-col sm:flex-row">
          <div className="sm:min-w-[517px] max-w-[181px] sm:min-h-[511px]">
            <img className="w-full h-full" src={img} alt="img" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="px-5 sm:my-5 my-2 sm:text-[40px] text-[20px] font-bold text-center">
              {t("logIn.title")}
            </h1>
            <h3 className="mb-5 sm:text-[24px] text-[14px] text-center sm:font-semibold font-normal">
              {t("logIn.description")}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-2 mb-5">
                <input
                  {...register("introduction", { required: true })}
                  className="bg-white outline-none myShadow max-w-[60px] rounded-2xl p-3 "
                  type="text"
                  placeholder="+972"
                />

                <input
                  {...register("phone", { required: true })}
                  className="bg-white  outline-none myShadow min-w-[250px] w-full rounded-2xl p-3"
                  type="text"
                  placeholder="599634192"
                />
              </div>
              {errors.introduction && (
                <span className="text-[#d10404] mb-3 ">
                  {errors.introduction.message}
                </span>
              )}
              {errors.introduction && errors.phone ? "| | |" : ""}{" "}
              {errors.phone && (
                <span className="text-[#d10404] mb-3 ">
                  {errors.phone?.message}
                </span>
              )}
              {errors.introduction && errors.phone ? (
                <div className="mb-2"></div>
              ) : null}
              <input
                {...register("password", { required: true })}
                className="bg-white   outline-none myShadow rounded-2xl p-3 w-full   "
                type="text"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-[#d10404] mt-5 mb-3 block">
                  {errors.password?.message}
                </span>
              )}
              <span className="text-[10px] my-4 mx-2 block font-medium sm:hidden">
                {t("logIn.ForgotPassword")}
              </span>
              <div className="flex mb-3 ">
                <Button
                  className="myShadow min-w-[320px]! bg-[#ff914c] cursor-pointer hover:bg-[#ff914cd2] transition-all duration-200 rounded-2xl! text-[16px]! h-full sm:font-semibold! font-thin! mt-5!"
                  variant="default"
                >
                  {isPending ? t("logIn.registering") : t("logIn.ptn")}{" "}
                </Button>
              </div>
            </form>
            <Link to={"/signup"}>
              <p className=" hidden sm:block font-normal  text-[12px] text-[#1A1A1A80]">
                {t("logIn.haveNotAccount")}
                <span className="text-black">{t("logIn.signIn")} </span>
              </p>
            </Link>
            <Link to={"/signup"}>
              <p className="cursor-pointer sm:hidden font-normal text-[12px] text-[#1A1A1A80]">
                {t("logIn.dontHaveAccount")}{" "}
                <span className="text-black"> {t("logIn.register")}</span>
              </p>
            </Link>
            {data?.message === "Login successful" && (
              <p className="text-green-600 text-sm mt-2">
                {t("logIn.Loginsuccessful")}
              </p>
            )}
            {error && (
              <p className="text-red-500 text-sm">
                {error.message} {}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
