import axios from "axios"
import i18n from "./i18n"

export const api = axios.create({
  baseURL: "https://e-commerc-api-xtc1.onrender.com/api/v1",
})

api.interceptors.request.use((config) => {
  const lang = i18n.language

  config.headers["Accept-Language"] = lang

  const accessToken = window.localStorage.getItem("accessToken")
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
})
