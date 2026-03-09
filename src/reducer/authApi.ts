import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data
            })
        }),

        signin: builder.mutation({
            query: (data) => ({
                url: '/auth/signin',
                method: 'POST',
                body: data
            })
        })
    })
});

export const {
    useSignupMutation,
    useSigninMutation
} = authApi