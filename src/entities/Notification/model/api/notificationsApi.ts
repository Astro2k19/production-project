import { type Notification } from '../types/NotificationType'

import { rtkApi } from '@/shared/api/rtkApi'

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getNotification: build.query<Notification[], null>({
      query: () => '/notifications'
    })
  })
})

export const useNotification = notificationsApi.useGetNotificationQuery
