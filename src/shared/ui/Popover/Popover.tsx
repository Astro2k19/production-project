import {
    type Placement,
    flip,
    offset,
    shift,
    useFloating,
} from '@floating-ui/react'
import { Popover as HPopover } from '@headlessui/react'
import { Fragment, type ReactNode, memo } from 'react'

import cls from './Popover.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    children?: ReactNode
    direction?: Placement
}

export const Popover = memo(
    ({
        className,
        trigger,
        children,
        direction = 'bottom-end',
    }: PopoverProps) => {
        const { refs, floatingStyles } = useFloating({
            placement: direction,
            middleware: [flip(), offset(4), shift()],
        })

        return (
            <HPopover className={className}>
                <HPopover.Button
                    as={Fragment}
                    ref={refs.setReference}
                >
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
    },
)
