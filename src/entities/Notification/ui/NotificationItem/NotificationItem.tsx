import { memo } from 'react'

import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'

import { type Notification } from '../../model/types/NotificationType'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    item: Notification
}

export const NotificationItem = memo(
    ({ className, item }: NotificationItemProps) => {
        const text =
            item.title.length > 15
                ? `${item.title.slice(1, 25)}...`
                : item.title
        const content =
            item.description.length > 50
                ? `${item.description.slice(1, 80)}...`
                : item.description

        const cardContent = (
            <Card
                className={classNames([className, cls.notify])}
                padding={'16'}
            >
                <Text
                    title={text}
                    text={content}
                    TitleTag={'h6'}
                />
            </Card>
        )

        if (item.href) {
            return <a href={item.href}>{cardContent}</a>
        }

        return cardContent
    },
)
