import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TUser} from "src/entities/model/user.ts";
import {build} from "vite";
import {registerApi} from "src/entities/api";

export interface IAuthState extends Partial<TUser> {
    email?: string | null;
    token: null;
    isAuthenticated: boolean;
}

const initialState: IAuthState = {
    email: null,
    token: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        auth: (state, action: PayloadAction<IAuthState>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = action.payload.isAuthenticated;
        },
    }
})
export const {auth} = authSlice.actions

export default authSlice.reducer