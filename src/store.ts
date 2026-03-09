import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './slice/auth.slice';
import { authApi } from "./reducer/authApi";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        [authApi.reducerPath]: authApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch