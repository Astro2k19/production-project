import cls from './AuthModal.module.scss'
import { classNames } from 'shared/lib'
import { Modal } from 'shared/ui'
import { AuthForm } from 'features/auth/by-username/ui/AuthForm/AuthForm'
import { type FC } from 'react'

interface AuthModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const AuthModal: FC<AuthModalProps> = (props) => {
  const {
    className,
    onClose,
    isOpen
  } = props

  return (
      <Modal className={classNames([cls.authModal, className])} onClose={onClose} isOpen={isOpen}>
          <AuthForm />
      </Modal>
  )
}
