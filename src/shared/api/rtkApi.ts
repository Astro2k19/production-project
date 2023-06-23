import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.authData
      if (token) {
        headers.set('authorization', token)
      }

      return headers
    }
  }),
  endpoints: () => ({})
})
