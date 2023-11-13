import { memo, useCallback, useState } from 'react'

import { NotificationList } from '@/entities/Notification'

import NotificationIcon from '@/shared/assets/icons/Notify.svg'
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg'
import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { toggleFeature } from '@/shared/lib/features/toggleFeatures'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popover'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

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

        const trigger = toggleFeature({
            name: 'isAppRedesigned',
            on: () => (
                <Icon
                    Svg={NotificationIcon}
                    clickable
                    onClick={isMobile ? onDrawerOpen : undefined}
                />
            ),
            off: () => (
                <ButtonDeprecated
                    variant={ButtonVariants.CLEAR}
                    onClick={isMobile ? onDrawerOpen : undefined}
                >
                    <IconDeprecated
                        Svg={NotificationIconDeprecated}
                        inverted
                    />
                </ButtonDeprecated>
            ),
        })

        return (
            <div>
                {isMobile ? (
                    <>
                        {trigger}
                        <ToggleFeatures
                            feature={'isAppRedesigned'}
                            on={
                                <Drawer
                                    isOpen={isDrawerOpen}
                                    onClose={onDrawerClose}
                                    withPortal={true}
                                >
                                    <NotificationList
                                        className={cls.drawerNotificationList}
                                    />
                                </Drawer>
                            }
                            off={
                                <DrawerDeprecated
                                    isOpen={isDrawerOpen}
                                    onClose={onDrawerClose}
                                    withPortal={true}
                                >
                                    <NotificationList
                                        className={cls.drawerNotificationList}
                                    />
                                </DrawerDeprecated>
                            }
                        />
                    </>
                ) : (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <Popover
                                trigger={trigger}
                                className={classNames([className])}
                            >
                                <NotificationList
                                    className={cls.notificationList}
                                />
                            </Popover>
                        }
                        off={
                            <PopoverDeprecated
                                trigger={trigger}
                                className={classNames([className])}
                            >
                                <NotificationList
                                    className={cls.notificationList}
                                />
                            </PopoverDeprecated>
                        }
                    />
                )}
            </div>
        )
    },
)
