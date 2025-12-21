import "./index.css"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import { Routes, Route } from "react-router-dom"
import Sizing from "./Pages/Sizing"
import Products from "./Pages/Products"
import ReplacementAccording from "./Pages/ReplacementAccording"
import { useTranslation } from "react-i18next"
import ProductDetails from "./Pages/ProductDetails"
import ShoppingCart from "./Pages/ShoppingCart"
import Error from "./Pages/Error"
import RequireAuth from "./components/RequireAuth"
import PublicRoute from "./components/PublicRoute"
import Favorite from "./Pages/Favorite"
import Profile from "./Pages/Profile"

function App() {
  const { i18n } = useTranslation()
  return (
    <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <Routes>
        <Route
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
          path="/signup"
        />
        <Route
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
          path="/login"
        />
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="home" />
        <Route
          element={
            <RequireAuth>
              <Sizing />
            </RequireAuth>
          }
          path="/sizing"
        />
        <Route
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
          path="/products"
        />
        <Route
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
          path="/products/:id"
        />
        <Route
          element={
            <RequireAuth>
              <ShoppingCart />
            </RequireAuth>
          }
          path="/shoppingCart"
        />
        <Route
          element={
            <RequireAuth>
              <Favorite />
            </RequireAuth>
          }
          path="/favorite"
        />
        <Route element={<Error />} path="*" />
        <Route
          element={<ReplacementAccording />}
          path="/replacementAccording"
        />
        <Route
          element={
            // <RequireAuth>
            <Profile />
            // </RequireAuth>
          }
          path="/profile"
        />
      </Routes>
    </div>
  )
}

export default App
