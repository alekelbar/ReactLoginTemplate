import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes";
import { useAppSelector } from "../redux/hooks.redux";

export const PrivateGuard = () => {
  const { userSession } = useAppSelector(state => state.loginReducer);

  if (!userSession) return <Navigate to={`${routes.AUTH}/${routes.LOGIN}`} />

  return (
    <Outlet />
  )
}