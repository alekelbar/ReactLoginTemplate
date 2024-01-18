import axios from "axios"

const apiInstance = axios.create({
  baseURL: "http://localhost:5199/api"
});

export const useAnonymousApi = () => {
  return {
    client: apiInstance
  }
}