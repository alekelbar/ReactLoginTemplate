import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TApiCredentials } from './types/LoginState.type';
import { getKeyFromLocalStorage, removeKeyFromLocalStorage } from '../../../utilities/localStorageUtility';

type TLoginSlice = {
    apiCredentials: TApiCredentials | null;
    roles: string[];
    loading: boolean;
    error: string | null;
}

const initialState: TLoginSlice = {
    apiCredentials: getKeyFromLocalStorage("session") ?? null,
    roles: getKeyFromLocalStorage("roles") ?? [],
    error: null,
    loading: false
}

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setLoginCredentials: (state, { payload }: PayloadAction<TApiCredentials>) => {
            return {
                ...state,
                apiCredentials: payload
            }
        },

        setRoles: (state, { payload }: PayloadAction<string[]>) => {
            return {
                ...state,
                roles: payload
            }
        },

        unsetLoginCredentials: (state) => {
            removeKeyFromLocalStorage("session");
            return {
                ...state,
                apiCredentials: null
            }
        },

        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            return {
                ...state,
                loading: payload
            }
        },

        setError: (state, { payload }: PayloadAction<string | null>) => {
            return {
                ...state,
                error: payload
            }
        }
    }
});

export const {
    setError,
    setLoading,
    setLoginCredentials,
    unsetLoginCredentials,
    setRoles,
} = LoginSlice.actions;
