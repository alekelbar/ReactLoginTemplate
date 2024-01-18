import axios from "axios"
import { useAppSelector } from "../redux/hooks.redux";

const apiInstance = axios.create({
  baseURL: "http://localhost:5199/api"
});

export const useAuthenticatedApi = () => {

  const { apiCredentials } = useAppSelector(state => state.loginReducer);
  if (!apiCredentials) throw new Error("El usuario no esta autenticado");

  // integrar la autorización
  apiInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiCredentials.token}`;
    return config;
  })

  return {
    client: apiInstance
  };
}