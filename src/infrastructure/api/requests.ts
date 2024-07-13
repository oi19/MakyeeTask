import axiosInstance from "./api"

export const fetchNews = async () => {
  const response = await axiosInstance.get("/top-headlines", {
    params: {
      country: "us",
    },
  })
  return response.data.articles
}
