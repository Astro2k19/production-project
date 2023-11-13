import {
    type Placement,
    flip,
    offset,
    shift,
    useFloating,
} from '@floating-ui/react'
import { Menu } from '@headlessui/react'
import { type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib'

import { AppLink } from '../../../AppLink'
import clsPopups from '../../popups.module.scss'
import cls from './Dropdown.module.scss'

interface DropdownItem {
    content: ReactNode
    onClick?: () => void
    href?: string
    disabled?: boolean
}

interface DropdownProps {
    trigger: ReactNode
    className?: string
    items: DropdownItem[]
    direction?: Placement
}

export const Dropdown: FC<DropdownProps> = props => {
    const { trigger, items, className, direction = 'bottom-start' } = props
    const { refs, floatingStyles } = useFloating({
        placement: direction,
        middleware: [flip(), offset(4), shift()],
    })

    return (
        <Menu
            as={'div'}
            className={classNames([cls.dropdown, className])}
            ref={refs.setReference}
        >
            <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                ref={refs.setFloating}
                style={floatingStyles}
                className={clsPopups.menu}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            className={classNames([cls.item], {
                                [cls.active]: active,
                            })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={index}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
