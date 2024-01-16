import { BrowserRouter, Route } from "react-router-dom"
import { routes } from "./routes"
import { PrivateGuard } from "./private.guard"
import { RoutesWithNotFound } from "../helpers/Router/RoutesWithNotFound"
import { HomePage } from "../pages/Home"
import { PublicGuard } from "./public.guard"
import { LoginPage } from "../pages/Auth/Login"
import { RegisterPage } from "../pages/Auth/Register"
import { EntityPage } from "../pages/Home/EntityExampleCrud"


export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>

        {/* PUBLIC ROUTES */}
        <Route path={routes.HOME} element={<PrivateGuard />}>
          <Route index element={<HomePage />} />
          <Route path={routes.ENTITY_BY_ID} element={<EntityPage />} />
        </Route>

        {/* PRIVATE ROUTES */}
        <Route path={routes.AUTH} element={<PublicGuard />}>
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.LOGOUT} element={<RegisterPage />} />
        </Route>

      </RoutesWithNotFound>
    </BrowserRouter >
  )
}