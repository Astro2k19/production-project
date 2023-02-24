import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { Button, ButtonVariants } from 'shared/ui'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthModal } from 'features/auth/by-username'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

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

  console.log(document.querySelector('.app'))

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
