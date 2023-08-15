import { memo, type ReactNode, useCallback, useEffect, useRef } from 'react'
import cls from './Drawer.module.scss'
import { classNames } from 'shared/lib'
import { Portal } from '../portal/Portal'
import { Overlay } from '../overlay/Overlay'
import { CSSTransition } from 'react-transition-group'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Drawer = memo(({ className, onClose, isOpen, children }: DrawerProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const mods = {
    [cls.opened]: isOpen
  }

  return (
      <Portal>
          <CSSTransition
              in={isOpen}
              classNames={{ ...cls }}
              nodeRef={contentRef}
              unmountOnExit
              addEndListener={(done) => {
                contentRef.current?.addEventListener('transitionend', done, false)
              }}
          >
              <div className={classNames([cls.drawer, className, 'app_drawer'], mods)}>
                  <Overlay onClick={onClose} />
                  <div className={cls.content} ref={contentRef}>
                      {children}
                  </div>
              </div>
          </CSSTransition>
      </Portal>
  )
})
