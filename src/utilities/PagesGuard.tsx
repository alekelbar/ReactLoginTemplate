import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks.redux"
import { routes } from "../router/routes";

type PageGuardProps = {
  validRoles: string[],
  children: JSX.Element | JSX.Element[]
}

export const PagesGuard: React.FC<PageGuardProps> = ({
  validRoles,
  children
}) => {

  const { roles } = useAppSelector(state => state.loginReducer);

  console.log(roles)

  const userHasRole = roles.some(role => validRoles.includes(role));

  console.log(userHasRole)

  if (!userHasRole) return <Navigate to={`/${routes.SALES}`} />;

  return children;
}