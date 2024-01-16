import { Provider } from "react-redux"
import { store } from "./store.redux"

type ReduxProviderProps = {
  children: JSX.Element
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({
  children
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
