# React + TypeScript + Vite + ASP.NET login template

### structure

- root

  - src
    - assets
    - configuration
    - helpers
    - pages
    - redux
    - router
    - services
    - shared

- Dependencies
  - axios: `yarn add axios`
  - mui:
  ```bash
    yarn add @fontsource/roboto
    yarn add @mui/material @emotion/react @emotion/styled
    yarn add @mui/icons-material
  ```
  - formik: `yarn add formik`
  - redux-toolkit:
  ```bash
    yarn add @reduxjs/toolkit
    yarn add react-redux
  ```
  - Yup: `yarn add yup`
  - React-router-dom: `yarn add react-router-dom`

## setUp MUI

```JSX
// configuration/theme.config.ts

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// const THEME_CUSTOM = {

// };

export const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});


type ThemeConfigProviderProps = {
  children: JSX.Element
}

export const ThemeConfigProvider: React.FC<ThemeConfigProviderProps> = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

```

## setUp redux

```ts
// redux/store.redux.ts

import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

```ts
// redux/hooks.redux.ts

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store.redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

```ts
// redux/Slices/login.slice.ts

import { createSlice } from "@reduxjs/toolkit";

type TLoginSlice = {};

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {},
  reducers: {},
});

export const {} = LoginSlice.actions;
```

```tsx
// redux/ReduxProvider.tsx

import { Provider } from "react-redux";
import { store } from "./store.redux";

type ReduxProviderProps = {
  children: JSX.Element;
};

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
```

## setUp router

```tsx
// private.guard.ts

import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";
import { useAppSelector } from "../redux/hooks.redux";

export const PrivateGuard = () => {
  const { userSession } = useAppSelector((state) => state.loginReducer);

  if (!userSession) return <Navigate to={`${routes.AUTH}/${routes.LOGIN}`} />;

  return <Outlet />;
};
```

```tsx
// public.guard.ts

import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";
import { useAppSelector } from "../redux/hooks.redux";

export const PublicGuard = () => {
  const { userSession } = useAppSelector((state) => state.loginReducer);

  if (userSession) {
    return <Navigate to={routes.HOME} />;
  }

  return <Outlet />;
};
```

```tsx
// router.tsx

import { BrowserRouter, Route } from "react-router-dom";
import { routes } from "./routes";
import { PrivateGuard } from "./private.guard";
import { RoutesWithNotFound } from "../helpers/Router/RoutesWithNotFound";
import { HomePage } from "../pages/Home";
import { PublicGuard } from "./public.guard";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/Register";
import { EntityPage } from "../pages/Home/EntityExampleCrud";

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
    </BrowserRouter>
  );
};
```

```tsx
//routes.ts

export enum routes {
  HOME = "/",
  AUTH = "/auth",
  LOGIN = "login",
  LOGOUT = "logout",
  ENTITY_BY_ID = "entity/:id",
}
```
