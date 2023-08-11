import { memo } from 'react'
import cls from './NotificationButton.module.scss'
import { classNames } from 'shared/lib'
import { Icon } from 'shared/ui/icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/popover/Popover'

interface NotificationButtonProps {
  className?: string
}

export const NotificationsButton = memo(({ className }: NotificationButtonProps) => {
  return (
      <Popover trigger={<Icon Svg={NotificationIcon} inverted />} className={classNames([className])}>
          <NotificationList className={cls.notificationList} />
      </Popover>
  )
})
