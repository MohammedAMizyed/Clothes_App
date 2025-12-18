import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"
export default function PublicRoute({ children }: { children: ReactNode }) {
  const Token = localStorage.getItem("accessToken")
  if (Token) {
    return <Navigate to={"/"} />
  }
  return children
}
