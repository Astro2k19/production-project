import cls from './AuthModal.module.scss'
import { classNames } from 'shared/lib'
import { Loader, Modal } from 'shared/ui'
import { type FC, Suspense } from 'react'
import { AuthFormAsync } from '../AuthForm/AuthFormAsync'

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

  return (isOpen &&
      <Modal className={classNames([cls.authModal, className])} onClose={onClose} isOpen={isOpen} lazy={true}>
          <Suspense fallback={<Loader />}>
              <AuthFormAsync onSuccess={onClose}/>
          </Suspense>
      </Modal>
  )
}
