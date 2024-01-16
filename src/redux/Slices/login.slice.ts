import { createSlice } from '@reduxjs/toolkit';

type TLoginSlice = {
    userSession: string | null;
}

const initialState: TLoginSlice = {
    userSession: "usuario!"
}

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
    }
});

export const { } = LoginSlice.actions;
