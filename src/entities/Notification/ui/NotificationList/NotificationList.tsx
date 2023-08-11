import { memo } from 'react'
import { classNames } from 'shared/lib'
import { VStack } from 'shared/ui/stack'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import { useNotification } from '../../model/api/notificationsApi'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { data: notifications, isLoading } = useNotification(null, {
    pollingInterval: 5000
  })

  if (true) {
    return (
        <VStack className={classNames([className])} gap={'4'}>
            {new Array(3).fill(null).map((_, index) => <Skeleton key={index} width={'100%'} height={140} />)}
        </VStack>
    )
  }

  return (
      <VStack className={classNames([className])} gap={'4'}>
          {notifications?.map(item => (
              <NotificationItem key={item.id} item={item} />
          ))}
      </VStack>
  )
})
