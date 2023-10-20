import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { type StoreSchema } from '@/app/providers/storeProvider'

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({
		baseUrl: __API_URL__,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as StoreSchema).user.authData
			if (token) {
				headers.set('authorization', JSON.stringify(token))
			}

			return headers
		},
	}),
	endpoints: () => ({}),
})
