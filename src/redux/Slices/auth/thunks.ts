import { AxiosInstance } from "axios";
import { AppDispatch, RootState } from "../../store.redux";
import { setError, setLoading, setLoginCredentials, setRoles } from "./login.slice";
import { TApiCredentials } from "./types/LoginState.type";
import { TApiResult } from "../../../types/apiResult.type";
import { TloginForm } from "../../../pages/Auth/Login/types";
import { setKeyToLocalStorage } from "../../../utilities/localStorageUtility";

export const userLoginThunk = (
  client: AxiosInstance,
  values: TloginForm
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {

    // poner el modo de carga...
    dispatch(setLoading(true));
    dispatch(setError(null));

    // buscar la información del api
    try {
      const { data } = await client.post<TApiResult<TApiCredentials>>("auth/login", values);
      // actualizar el estado de la aplicación para colocar las credenciales
      dispatch(setLoginCredentials(data.result));
      setKeyToLocalStorage("session", data.result);

      // load roles from api...
      const { apiCredentials } = getState().loginReducer;
      const { data: roles } = await client.get<TApiResult<string[]>>(`setup/GetUserRoles?email=${apiCredentials!.email}`, {
        headers: {
          Authorization: `bearer ${apiCredentials!.token}`
        }
      });

      dispatch(setRoles(roles.result));
      setKeyToLocalStorage("roles", roles.result);

    } catch (error: any) {
      console.log(error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        dispatch(setError(error.response.data.message));

      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(setLoading(false));
    }

  };
}