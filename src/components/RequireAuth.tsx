import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

export default function RequireAuth({ children }: { children: ReactNode }) {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to={"/login"} />
  }
  return children
}
