import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, AppLinkVariants, Button, ButtonVariants } from 'shared/ui'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthModal } from 'features/auth/by-username'
import { getUserAuthDate, userActions } from 'entities/User'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { appPaths } from 'shared/config/routerConfig/routerConfig'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/avatar/Avatar'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()
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

  const onLogOut = useCallback(
    () => {
      dispatch(userActions.logOut())
    },
    [dispatch])

  const onCreateNewArticle = useCallback(() => {
    navigate(`${appPaths.article_new}`)
  }, [navigate])

  if (authDate) {
    return (
        <div className={classNames([cls.navbar, className])}>
            <AppLink to={'/'} variant={AppLinkVariants.INVERTED} className={cls.logo}>Dev Site</AppLink>
            <Button
                  onClick={onCreateNewArticle}
                  variant={ButtonVariants.CLEAR_INVERTED}
            >
                {t('Create new article')}
            </Button>
            <div className={cls.links}>
                <Dropdown trigger={<Avatar src={authDate.avatar} size={30} />} items={
                    [
                      {
                        content: t('Log Out'),
                        onClick: onLogOut
                      },
                      {
                        content: t('Profile', { ns: 'profile' }),
                        href: `${appPaths.profile}${authDate.id}`
                      }
                    ]
                }/>
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
