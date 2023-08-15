import { memo, type ReactNode, useCallback, useEffect } from 'react'
import cls from './Drawer.module.scss'
import { classNames } from 'shared/lib'
import { Portal } from '../portal/Portal'
import { Overlay } from '../overlay/Overlay'
import { useAnimLibs } from 'shared/lib/AnimationProvider'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const height = window.innerHeight - 100

export const DrawerContent = memo(({ className, onClose, isOpen, children }: DrawerProps) => {
  const { Gesture, Spring } = useAnimLibs()
  // const contentRef = useRef<HTMLDivElement>(null)
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const open = useCallback(({ canceled }: { canceled: boolean }) => {
    api.start({ y: 0, immediate: false, config: canceled ? Spring.config.wobbly : Spring.config.stiff })
  }, [Spring.config.stiff, Spring.config.wobbly, api])

  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose })
  }

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (oy < -70) cancel()

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled })
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else api.start({ y: oy, immediate: true })
    },
    { from: () => [0, y.get()], bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  useEffect(() => {
    if (isOpen) {
      open({ canceled: false })
    }
  }, [isOpen, open])

  if (!isOpen) {
    return null
  }

  return (
      <Portal>
          <div className={classNames([cls.drawer, className, 'app_drawer'])} >
              <Overlay onClick={() => { close() }} />
              <Spring.a.div className={cls.content} {...bind()} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}>
                  {children}
              </Spring.a.div>
          </div>
      </Portal>
  )
})

export const Drawer = ({ children, ...props }: DrawerProps) => {
  const { isLoaded } = useAnimLibs()

  if (!isLoaded) {
    return null
  }

  return (
      <DrawerContent {...props}>
          {children}
      </DrawerContent>
  )
}
