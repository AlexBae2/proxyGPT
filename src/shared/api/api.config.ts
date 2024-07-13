import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import {RootState} from "src/store/store.ts";

const baseQuery = fetchBaseQuery({
    baseUrl: 'localhost:5001/api',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('authentication', `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({}),
})