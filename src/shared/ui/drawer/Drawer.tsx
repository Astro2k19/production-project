import { memo, type ReactNode, useCallback, useEffect, useRef } from 'react'
import cls from './Drawer.module.scss'
import { classNames } from 'shared/lib'
import { Portal } from '../portal/Portal'
import { Overlay } from '../overlay/Overlay'
import { CSSTransition } from 'react-transition-group'
import { config, useSpring, a } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const height = window.innerHeight - 100

export const Drawer = memo(({ className, onClose, isOpen, children }: DrawerProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [{ y }, api] = useSpring(() => ({ y: height }))

  const open = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity }, onResolve: onClose })
  }

  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (oy < -70) cancel()

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : open()
      } else {
        // when the user keeps dragging, we just move the sheet according to
        // the cursor position
        api.start({ y: oy, immediate: true })
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  useEffect(() => {
    return () => {
      if (isOpen) {
        open()
      }
    }
  }, [isOpen, open])

  // const mods = {
  //   [cls.opened]: isOpen
  // }

  // return (
  //     <Portal>
  //         <CSSTransition
  //             in={isOpen}
  //             classNames={{ ...cls }}
  //             nodeRef={contentRef}
  //             unmountOnExit
  //             addEndListener={(done) => {
  //               contentRef.current?.addEventListener('transitionend', done, false)
  //             }}
  //         >
  //             <div className={classNames([cls.drawer, className, 'app_drawer'], mods)}>
  //                 <Overlay onClick={onClose} />
  //                 <div className={cls.content} ref={contentRef}>
  //                     {children}
  //                 </div>
  //             </div>
  //         </CSSTransition>
  //     </Portal>
  // )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  if (!isOpen) {
    return null
  }

  return (
      <Portal>
          <div className={classNames([cls.drawer, className, 'app_drawer'])} >
              <Overlay onClick={onClose} />
              <a.div className={cls.content} ref={contentRef} {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}>
                  {children}
              </a.div>
          </div>
      </Portal>
  )
})
