import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { Button, ButtonVariants } from 'shared/ui'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/modal/Modal'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const onToggleModal = useCallback(
    () => {
      setIsOpen(prevState => !prevState)
    },
    []
  )

  console.log(document.querySelector('.app'))

  return (
      <div className={classNames([cls.navbar, className])}>
          <Modal isOpen={isOpen} onClose={onToggleModal}>
              {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsa iure maxime nostrum ut.\n' +
                    'Deserunt dolorem doloremque fuga fugiat fugit inventore iure magni maiores, minus molestiae\n' +
                    'provident quisquam repellat similique?')}
          </Modal>
          <div className={cls.links}>
              <Button onClick={onToggleModal} variant={ButtonVariants.CLEAR_INVERTED}>
                  {t('Log In')}
              </Button>
          </div>
      </div>
  )
}
