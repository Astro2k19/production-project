import { memo, useCallback, useState } from 'react'
import cls from './NotificationButton.module.scss'
import { classNames } from 'shared/lib'
import { Icon } from 'shared/ui/icon/Icon'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/popover/Popover'
import { Drawer } from 'shared/ui/drawer/Drawer'
import { useDevice } from 'shared/lib/hooks/useDevice'
import { Button, ButtonVariants } from 'shared/ui'
import { AnimationProvider } from 'shared/lib/AnimationProvider'

interface NotificationButtonProps {
  className?: string
}

export const NotificationsButton = memo(({ className }: NotificationButtonProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isMobile = useDevice()

  const onDrawerOpen = useCallback(
    () => {
      console.log('drawer')
      setIsDrawerOpen(true)
    },
    []
  )

  const onDrawerClose = useCallback(
    () => {
      setIsDrawerOpen(false)
    },
    []
  )

  const trigger = (
      <Button variant={ButtonVariants.CLEAR} onClick={isMobile ? onDrawerOpen : undefined}>
          <Icon Svg={NotificationIcon} inverted />
      </Button>
  )

  return (
      <div>
          {isMobile
            ? (
                <>
                    {trigger}
                    <AnimationProvider>
                        <Drawer isOpen={isDrawerOpen} onClose={onDrawerClose}>
                            <NotificationList className={cls.drawerNotificationList} />
                        </Drawer>
                    </AnimationProvider>
                </>
              )
            : (
                <Popover trigger={trigger} className={classNames([className])}>
                    <NotificationList className={cls.notificationList} />
                </Popover>
              )}
      </div>
  )
})
