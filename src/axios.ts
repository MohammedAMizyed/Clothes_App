import axios from "axios"

export const api = axios.create({
  baseURL: "https://e-commerc-api-xtc1.onrender.com/api/v1",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`,
  },
})
