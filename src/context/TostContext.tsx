import Tost from "@/components/Tost"
import { createContext, useContext, type ReactNode } from "react"
import { useState } from "react"
interface TostContextType {
  handleShowMessage: (theMEssage: string | ReactNode) => void
}
const TostContext = createContext<null | TostContextType>(null)

export const TostProvider = ({ children }: { children: ReactNode }) => {
  const [isOk, setIsOk] = useState<boolean>(false)
  const [message, setMessage] = useState<string | ReactNode>("false")
  const handleShowMessage = (theMessage: string | ReactNode) => {
    setIsOk(true)
    setMessage(theMessage)
    setTimeout(() => {
      setIsOk(false)
    }, 2000)
  }

  return (
    <TostContext.Provider value={{ handleShowMessage }}>
      <Tost isOk={isOk} message={message} />
      {children}
    </TostContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTost = () => {
  const value = useContext(TostContext)
  if (!value) throw new Error("There Is problem in the file TostContext")
  return value
}
