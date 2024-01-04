import { flip, offset, shift, size, useFloating } from '@floating-ui/react'
import { Listbox } from '@headlessui/react'
import { Fragment, type ReactNode, useMemo } from 'react'

import ArrowDown from '@/shared/assets/icons/Arrow.svg'
import { classNames } from '@/shared/lib'

import { Button } from '../../../Button'
import { Icon } from '../../../Icon'
import { HStack } from '../../../Stack'
import { Text } from '../../../Text'
import clsPopups from '../../popups.module.scss'
import cls from './ListBox.module.scss'

export interface ListBoxItem<T extends string> {
    value: T
    label: ReactNode
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    items: Array<ListBoxItem<T>>
    label?: string
    value?: T
    defaultValue?: T
    onChange: (value: T) => void
    className?: string
    readonly?: boolean
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const { value, defaultValue, items, readonly, onChange, className, label } =
        props
    const { refs, floatingStyles } = useFloating({
        placement: 'bottom-start',
        middleware: [
            flip(),
            offset(1),
            shift(),
            size({
                apply({ rects, elements }) {
                    Object.assign(elements.floating.style, {
                        width: `${rects.reference.width}px`,
                    })
                },
            }),
        ],
    })

    const selectedItem = useMemo(
        () => items.find(item => item.value === value),
        [items, value],
    )

    const listBox = (
        <Listbox
            value={value}
            defaultValue={defaultValue}
            as="div"
            className={classNames([cls.listBox, className])}
            disabled={readonly}
            onChange={onChange}
        >
            <Listbox.Button as={Fragment}>
                <Button
                    variant={'filled'}
                    border={'round'}
                    className={cls.trigger}
                    disabled={readonly}
                    addonRight={<Icon Svg={ArrowDown} />}
                    ref={refs.setReference}
                >
                    <span>{selectedItem?.label ?? defaultValue}</span>
                </Button>
            </Listbox.Button>
            <Listbox.Options
                className={classNames([cls.options, clsPopups.menu])}
                ref={refs.setFloating}
                style={floatingStyles}
            >
                {items.map(item => (
                    <Listbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames([cls.item], {
                                    [cls.active]: active,
                                    [cls.selected]: selected,
                                    [cls.disabled]: item.disabled,
                                })}
                            >
                                {item.label}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )

    if (label) {
        return (
            <HStack
                gap={'12'}
                alignItems={'center'}
            >
                <Text text={label} />
                {listBox}
            </HStack>
        )
    }

    return listBox
}
