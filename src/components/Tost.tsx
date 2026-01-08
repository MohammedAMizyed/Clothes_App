import type { ReactNode } from "react"

export default function Tost({
  isOk,
  message,
}: {
  isOk: boolean
  message: ReactNode | string
}) {
  if (isOk) {
    return (
      <div className=" fixed z-10 bottom-15 left-15 transition-all duration-200">
        <h2 className="myShadow px-5 flex gap-2 justify-center items-center flex-row-reverse py-3 font-bold rounded-2xl bg-green-500 text-[20px] text-white">
          {message}
        </h2>
      </div>
    )
  }
}
