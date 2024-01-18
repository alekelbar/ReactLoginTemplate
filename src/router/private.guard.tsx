import { Navigate, Outlet } from "react-router-dom"
import { routes } from "./routes";
import { useAppSelector } from "../redux/hooks.redux";
import { PrivateLayout } from "../shared/layout/PrivateLayout";


export const PrivateGuard: React.FC = () => {
  const { apiCredentials } = useAppSelector(state => state.loginReducer);

  if (!apiCredentials) return <Navigate to={`${routes.AUTH}/${routes.LOGIN}`} />

  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  )
}