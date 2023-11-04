import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API_URL__,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem(USER_AUTH_DATA_KEY)
            if (token) {
                headers.set('authorization', token)
            }

            return headers
        },
    }),
    endpoints: () => ({}),
})
