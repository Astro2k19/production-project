import cls from './Modal.module.scss'
import { classNames } from 'shared/lib'
import { type MouseEvent, type ReactNode, useEffect, useCallback, type FC } from 'react'
import { Portal } from 'shared/ui/portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props

  const renderPlace = document.querySelector('.app')

  const onContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  const closeModal = useCallback(
    () => {
      if (onClose !== undefined) {
        onClose()
      }
    },
    [onClose]
  )

  const onKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('keyup', onKeyUp)
    }

    return () => {
      document.body.removeEventListener('keyup', onKeyUp)
    }
  }, [onKeyUp, isOpen])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  return (
      <Portal domNode={renderPlace}>
          <div className={classNames([cls.modal, className], mods)}>
              <div className={cls.overlay} onClick={closeModal}>
                  <div className={cls.content} onClick={onContentClick}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}
