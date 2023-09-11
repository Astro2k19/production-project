import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { getUserAuthDate } from '@/entities/User'
import { AuthModal } from '@/features/Auth'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationsButton } from '@/features/NotificationButton'
import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { appPaths } from '@/shared/types/router'
import { AppLink, AppLinkVariants } from '@/shared/ui/AppLink'
import { Button, ButtonVariants } from '@/shared/ui/Button'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const authDate = useAppSelector(getUserAuthDate)
  const navigate = useNavigate()

  const onClose = useCallback(
    () => {
      setIsOpen(false)
    },
    []
  )

  const onOpen = useCallback(
    () => {
      setIsOpen(true)
    },
    []
  )

  const onCreateNewArticle = useCallback(() => {
    navigate(`${appPaths.article_new}`)
  }, [navigate])

  if (authDate) {
    return (
        <div className={classNames([cls.navbar, className])}>
            <AppLink to={'/'} variant={AppLinkVariants.INVERTED} className={cls.logo}>
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

  return (
      <div className={classNames([cls.navbar, className])}>
          <AuthModal isOpen={isOpen} onClose={onClose} />
          <div className={cls.links}>
              <Button onClick={onOpen} variant={ButtonVariants.CLEAR_INVERTED}>
                  {t('Log In')}
              </Button>
          </div>
      </div>
  )
})
