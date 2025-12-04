import "./index.css"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import { Routes, Route } from "react-router-dom"
import Sizing from "./Pages/Sizing"
import Shopping from "./Pages/Shopping"
import ReplacementAccording from "./Pages/ReplacementAccording"
import { useTranslation } from "react-i18next"
import ProductDetails from "./Pages/ProductDetails"

function App() {
  const { i18n } = useTranslation()
  return (
    <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <Routes>
        <Route element={<SignUp />} path="/signup" />
        <Route element={<LogIn />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Sizing />} path="/sizing" />
        <Route element={<Shopping />} path="/shopping" />
        <Route element={<ProductDetails />} path="/productDetails" />
        <Route
          element={<ReplacementAccording />}
          path="/replacementAccording"
        />
      </Routes>
    </div>
  )
}

export default App
