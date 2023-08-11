import { memo } from 'react'
import { classNames } from 'shared/lib'
import { Card } from 'shared/ui/card/Card'
import { Text } from 'shared/ui'
import { type Notification } from '../../model/types/NotificationType'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
  const text = item.title.length > 15 ? `${item.title.slice(1, 30)}...` : item.title
  const content = item.title.length > 50 ? `${item.title.slice(1, 80)}...` : item.title

  if (item.href) {
    return (
        <a href={item.href}>
            <Card className={classNames([className])}>
                <Text title={text} text={content} TitleTag={'h5'} />
            </Card>
        </a>
    )
  }

  return (
      <Card className={classNames([className])}>
          <Text title={text} text={content} TitleTag={'h5'} />
      </Card>
  )
})
