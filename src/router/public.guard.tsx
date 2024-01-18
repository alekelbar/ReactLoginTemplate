import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes";
import { useAppSelector } from "../redux/hooks.redux";
import { PublicLayout } from "../shared/layout/PublicLayout";

export const PublicGuard = () => {
  const { apiCredentials } = useAppSelector(state => state.loginReducer);

  if (apiCredentials) {
    return <Navigate to={routes.DASHBOARD} />
  }

  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}