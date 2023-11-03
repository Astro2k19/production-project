import { rtkApi } from '@/shared/api/rtkApi'

import { JsonSettings } from '../model/types/jsonSettings'
import { User } from '../model/types/userTypes'

export interface setJsonSettingsOptions {
    userId: string
    jsonSettings?: JsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        defineJsonOptions: build.mutation<User, setJsonSettingsOptions>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
})

export const defineJsonOptions = userApi.endpoints.defineJsonOptions.initiate
