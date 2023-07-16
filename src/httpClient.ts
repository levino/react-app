import axios from "axios"

export const httpClient = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-type": "application/json",
  },
})
