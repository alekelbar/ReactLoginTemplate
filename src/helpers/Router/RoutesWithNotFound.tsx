import { Route, Routes } from "react-router-dom"

type RoutesWithNotFoundProps = {
  children: JSX.Element | JSX.Element[];
}

export const RoutesWithNotFound: React.FC<RoutesWithNotFoundProps> = ({
  children
}) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found page</div>} />
    </Routes>
  )
}