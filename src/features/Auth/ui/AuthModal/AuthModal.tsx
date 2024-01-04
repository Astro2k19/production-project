import { type FC, Suspense } from 'react'

import { classNames } from '@/shared/lib'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Modal } from '@/shared/ui/redesigned/Modal'

import { AuthFormAsync } from '../AuthForm/AuthFormAsync'
import cls from './AuthModal.module.scss'

interface AuthModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const AuthModal: FC<AuthModalProps> = props => {
    const { className, onClose, isOpen } = props

    return (
        <>
            {isOpen && (
                <Modal
                    className={classNames([cls.authModal, className])}
                    onClose={onClose}
                    isOpen={isOpen}
                    lazy={true}
                >
                    <Suspense fallback={<Loader />}>
                        <AuthFormAsync onSuccess={onClose} />
                    </Suspense>
                </Modal>
            )}
        </>
    )
}
