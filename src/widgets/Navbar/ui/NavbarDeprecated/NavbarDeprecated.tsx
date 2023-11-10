import React from 'react'
import { useTranslation } from 'react-i18next'

import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationsButton } from '@/features/NotificationButton'

import { User } from '@/entities/User'

import { classNames } from '@/shared/lib'
import { AppLink, AppLinkVariants } from '@/shared/ui/deprecated/AppLink'
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button'

import cls from './NavbarDeprecated.module.scss'

interface NavbarDeprecatedProps {
    className?: string
    onCreateNewArticle: () => void
    authDate: User
}
export const NavbarDeprecated = ({
    className,
    onCreateNewArticle,
    authDate,
}: NavbarDeprecatedProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames([cls.navbar, className])}>
            <AppLink
                to={'/'}
                variant={AppLinkVariants.INVERTED}
                className={cls.logo}
            >
                {t('Dev Site')}
            </AppLink>
            <Button
                onClick={onCreateNewArticle}
                variant={ButtonVariants.CLEAR_INVERTED}
            >
                {t('Create new article')}
            </Button>
            <div className={cls.links}>
                <NotificationsButton />
                <AvatarDropdown authDate={authDate} />
            </div>
        </div>
    )
}
