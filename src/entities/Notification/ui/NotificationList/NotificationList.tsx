import { memo } from 'react'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { useNotification } from '../../api/notificationsApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data: notifications, isLoading } = useNotification(null, {
        pollingInterval: 5000,
    })

    if (isLoading) {
        return (
            <VStack
                className={classNames([className])}
                gap={'12'}
                noShrink
            >
                {new Array(4).fill(null).map((_, index) => (
                    <Skeleton
                                                    key={index}
                                                    width={'100%'}
                                                    height={113}
                                                />
                ))}
            </VStack>
        )
    }

    return (
        <VStack
            className={classNames([className, 'list'])}
            noShrink
        >
            {notifications?.map(item => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    )
})
