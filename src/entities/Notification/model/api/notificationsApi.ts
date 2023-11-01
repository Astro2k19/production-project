import { rtkApi } from '@/shared/api/rtkApi'

import { type Notification } from '../types/NotificationType'

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getNotification: build.query<Notification[], null>({
            query: () => '/notifications',
        }),
    }),
})

export const useNotification = notificationsApi.useGetNotificationQuery
