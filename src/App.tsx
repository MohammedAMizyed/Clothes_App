import "./index.css"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/Login"
import { Routes, Route } from "react-router-dom"
import Sizing from "./Pages/Sizing"
import i18n from "@/i18n"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
function App() {
  const { i18n } = useTranslation()
  // const [dir, setDir] = useState<"rtl" | "ltr">("ltr")
  // useEffect(() => {
  //   if (i18n.language == "ar") {
  //     // eslint-disable-next-line react-hooks/set-state-in-effect
  //     setDir("rtl")
  //   } else {
  //     setDir("ltr")
  //   }
  // }, [i18n])

  return (
    <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <Routes>
        <Route element={<SignUp />} path="/signup" />
        <Route element={<LogIn />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Sizing />} path="/sizing" />
      </Routes>
    </div>
  )
}

export default App
