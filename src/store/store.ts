import {combineReducers, configureStore, ConfigureStoreOptions} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "src/features/auth/slices";
import {registerApi} from "src/entities/api";
import {api} from "src/shared/api/api.config.ts";

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) => configureStore({
    reducer: {[api.reducerPath]: api.reducer,auth: authReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), ...options,
})

export const store = createStore();

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector