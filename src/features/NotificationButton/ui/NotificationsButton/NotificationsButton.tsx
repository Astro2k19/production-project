import { memo, useCallback, useState } from 'react'

import { NotificationList } from '@/entities/Notification'

import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { classNames } from '@/shared/lib'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Popover } from '@/shared/ui/Popover'
import { Icon } from '@/shared/ui/icon'

import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationsButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isDrawerOpen, setIsDrawerOpen] = useState(false)
        const isMobile = useDevice()

        const onDrawerOpen = useCallback(() => {
            setIsDrawerOpen(true)
        }, [])

        const onDrawerClose = useCallback(() => {
            setIsDrawerOpen(false)
        }, [])

        const trigger = (
            <Button
                variant={ButtonVariants.CLEAR}
                onClick={isMobile ? onDrawerOpen : undefined}
            >
                <Icon
                    Svg={NotificationIcon}
                    inverted
                />
            </Button>
        )

        return (
            <div>
                {isMobile ? (
                    <>
                        {trigger}
                        <Drawer
                            isOpen={isDrawerOpen}
                            onClose={onDrawerClose}
                            withPortal={true}
                        >
                            <NotificationList
                                className={cls.drawerNotificationList}
                            />
                        </Drawer>
                    </>
                ) : (
                    <Popover
                        trigger={trigger}
                        className={classNames([className])}
                    >
                        <NotificationList className={cls.notificationList} />
                    </Popover>
                )}
            </div>
        )
    },
)
