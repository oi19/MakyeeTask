import { API_KEY, BASE_URL } from "@env"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export const fetchNews = async () => {
  const response = await axiosInstance.get("/top-headlines", {
    params: {
      country: "us",
    },
  })
  return response.data.articles
}

export default axiosInstance
