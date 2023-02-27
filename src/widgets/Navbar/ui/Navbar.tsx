import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { Button, ButtonVariants } from 'shared/ui'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthModal } from 'features/auth/by-username'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthDate, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const authDate = useSelector(getUserAuthDate)

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
    [dispatch]
  )

  if (authDate) {
    return (
        <div className={classNames([cls.navbar, className])}>
            <div className={cls.links}>
                <Button onClick={onLogOut} variant={ButtonVariants.CLEAR_INVERTED}>
                    {t('Log Out')}
                </Button>
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
}
