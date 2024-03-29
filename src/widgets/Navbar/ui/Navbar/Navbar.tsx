import React, { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AuthModal } from '@/features/Auth'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationsButton } from '@/features/NotificationButton'

import { getUserAuthDate } from '@/entities/User'

import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const authDate = useAppSelector(getUserAuthDate)
    // const navigate = useNavigate()

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    // const onCreateNewArticle = useCallback(() => {
    //     navigate(getRouteArticleNew())
    // }, [navigate])

    if (authDate) {
        return (
            <div className={classNames([cls.navbarRedesigned, className])}>
                <HStack
                    gap={'16'}
                    alignItems={'center'}
                >
                    <NotificationsButton />
                    <AvatarDropdown authDate={authDate} />
                </HStack>
            </div>
        )
    }

    return (
        <div className={classNames([className])}>
            <AuthModal
                isOpen={isOpen}
                onClose={onClose}
            />
            <Button
                onClick={onOpen}
                // variant={'clear'}
            >
                {t('Log In')}
            </Button>
        </div>
    )
})
