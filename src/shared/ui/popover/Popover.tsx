import { Fragment, memo, type ReactNode } from 'react'
import cls from './Popover.module.scss'
import { Popover as HPopover } from '@headlessui/react'
import { flip, offset, type Placement, shift, useFloating } from '@floating-ui/react'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  children?: ReactNode
  direction?: Placement
}

export const Popover = memo(({ className, trigger, children, direction = 'bottom-end' }: PopoverProps) => {
  const { refs, floatingStyles } = useFloating({
    placement: direction,
    middleware: [flip(), offset(4), shift()]
  })

  return (
      <HPopover ref={refs.setReference} className={className}>
          <HPopover.Button as={Fragment}>
              {trigger}
          </HPopover.Button>
          <HPopover.Panel
              style={floatingStyles}
              ref={refs.setFloating}
              className={cls.panel}
          >
              {children}
          </HPopover.Panel>
      </HPopover>
  )
})
