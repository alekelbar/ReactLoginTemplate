import { BrowserRouter, Route } from "react-router-dom"
import { routes } from "./routes"
import { PrivateGuard } from "./private.guard"
import { RoutesWithNotFound } from "../utilities/RoutesWithNotFound"
import { DashBoardPage } from "../pages/Dashboard"
import { PublicGuard } from "./public.guard"
import { LoginPage } from "../pages/Auth/Login"
import { RegisterPage } from "../pages/Auth/Register"
import { CheckOutPage } from "../pages/Checkout"
import { SalesPage } from "../pages/Sales"
import { StockPage } from "../pages/Stock"
import { TransactionsPage } from "../pages/Transactions"
import { UsersPage } from "../pages/Users"
import { PagesGuard } from "../utilities/PagesGuard"
import { EUserRoles } from "../utilities/user.roles"


export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>

        {/* PUBLIC ROUTES */}
        <Route path={routes.DASHBOARD} element={<PrivateGuard />}>

          <Route index element={
            <PagesGuard validRoles={[EUserRoles.ADMIN]}>
              <DashBoardPage />
            </PagesGuard>
          } />

          <Route path={routes.CHECKOUT} element={
            <PagesGuard validRoles={[EUserRoles.ADMIN]}>
              <CheckOutPage />
            </PagesGuard>
          } />

          <Route path={routes.SALES} element={
            <PagesGuard validRoles={[EUserRoles.ADMIN, EUserRoles.SELLER]}>
              <SalesPage />
            </PagesGuard>
          } />

          <Route path={routes.STOCK} element={
            <PagesGuard validRoles={[EUserRoles.ADMIN]}>
              <StockPage />
            </PagesGuard>
          } />

          <Route path={routes.TRANSACTION} element={
            <PagesGuard validRoles={[EUserRoles.ADMIN]}>
              <TransactionsPage />
            </PagesGuard>
          } />

          <Route path={routes.USERS} element={
            <PagesGuard validRoles={[EUserRoles.ADMIN]}>
              <UsersPage />
            </PagesGuard>
          } />

          <Route path={routes.ENTITY_BY_ID} element={<div>hola!</div>} />

        </Route>

        {/* PRIVATE ROUTES */}
        <Route path={routes.AUTH} element={<PublicGuard />}>
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
        </Route>

      </RoutesWithNotFound>
    </BrowserRouter >
  )
}