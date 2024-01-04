import React, { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { AuthModal } from '@/features/Auth'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationsButton } from '@/features/NotificationButton'

import { getUserAuthDate } from '@/entities/User'

import { getRouteArticleNew } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'

import { NavbarDeprecated } from '../NavbarDeprecated/NavbarDeprecated'
import clsDeprecated from '../NavbarDeprecated/NavbarDeprecated.module.scss'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const authDate = useAppSelector(getUserAuthDate)
    const navigate = useNavigate()

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCreateNewArticle = useCallback(() => {
        navigate(getRouteArticleNew())
    }, [navigate])

    if (authDate) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <div
                        className={classNames([
                            cls.navbarRedesigned,
                            className,
                        ])}
                    >
                        <HStack
                            gap={'16'}
                            alignItems={'center'}
                        >
                            <NotificationsButton />
                            <AvatarDropdown authDate={authDate} />
                        </HStack>
                    </div>
                }
                off={
                    <NavbarDeprecated
                        onCreateNewArticle={onCreateNewArticle}
                        className={className}
                        authDate={authDate}
                    />
                }
            />
        )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div className={classNames([clsDeprecated.navbar, className])}>
                    <AuthModal
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                    <div className={clsDeprecated.links}>
                        <Button
                            onClick={onOpen}
                            variant={ButtonVariants.CLEAR_INVERTED}
                        >
                            {t('Log In')}
                        </Button>
                    </div>
                </div>
            }
            off={
                <div className={classNames([clsDeprecated.navbar, className])}>
                    <AuthModal
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                    <div className={clsDeprecated.links}>
                        <Button
                            onClick={onOpen}
                            variant={ButtonVariants.CLEAR_INVERTED}
                        >
                            {t('Log In')}
                        </Button>
                    </div>
                </div>
            }
        />
    )
})
