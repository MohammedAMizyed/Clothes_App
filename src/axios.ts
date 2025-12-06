import axios from "axios"

export const api = axios.create({
  baseURL: "https://e-commerc-api-xtc1.onrender.com/api/v1",
})
