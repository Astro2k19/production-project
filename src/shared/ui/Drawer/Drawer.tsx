import { memo, type ReactNode, useCallback, useEffect } from 'react'

import { Overlay } from '../Overlay'
import { Portal } from '../Portal'

import { classNames } from '@/shared/lib'
import { AnimationProvider, useAnimLibs } from '@/shared/lib/AnimationProvider'

import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  withPortal?: boolean
}

const height = window.innerHeight - 300

export const DrawerContent = memo((props: DrawerProps) => {
  const {
    className,
    onClose,
    isOpen,
    children,
    withPortal = false
  } = props
  const { Gesture, Spring } = useAnimLibs()
  // const contentRef = useRef<HTMLDivElement>(null)
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const open = useCallback(({ canceled }: { canceled: boolean }) => {
    api.start({ y: 0, immediate: false, config: canceled ? Spring.config.wobbly : Spring.config.stiff })
  }, [Spring.config.stiff, Spring.config.wobbly, api])

  const close = useCallback((velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose })
  }, [Spring.config.stiff, api, onClose])

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (oy < -70) cancel()

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled })
      } else {
        // when the user keeps dragging, we just move the sheet according to
        // the cursor position
        api.start({ y: oy, immediate: true })
      }
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

  const content = (
      <div className={classNames([cls.drawer, 'app_drawer'])} >
          <Overlay onClick={() => { close() }} as={Spring.a.div} style={{ display, opacity: y.to([0, height], [1, 0], 'clamp') }} />
          <Spring.a.div className={cls.sheet} style={{ display, bottom: `calc(-100vh + ${height - 300}px)`, y }}>
              <div className={cls.dragger} {...bind()}></div>
              <div className={classNames([cls.content, className])}>
                  {children}
              </div>
          </Spring.a.div>
      </div>
  )

  if (withPortal) {
    return (
        <Portal>
            {content}
        </Portal>
    )
  }

  return (
      <div className={classNames([cls.drawer, 'app_drawer'])} >
          {content}
      </div>
  )
})

const DrawerAsync = ({ children, ...props }: DrawerProps) => {
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

export const Drawer = ({ children, ...props }: DrawerProps) => {
  return (
      <AnimationProvider>
          <DrawerAsync {...props}>
              {children}
          </DrawerAsync>
      </AnimationProvider>
  )
}
