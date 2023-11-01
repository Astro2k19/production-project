import { flip, offset, shift, useFloating } from '@floating-ui/react'
import { Listbox } from '@headlessui/react'
import { Fragment, type ReactNode } from 'react'

import CaretDown from '@/shared/assets/icons/caret-down.svg'
import CheckedIcon from '@/shared/assets/icons/icon-checked.svg'
import { classNames } from '@/shared/lib'

import { HStack } from '../Stack'
import cls from './ListBox.module.scss'

interface ListBoxItem<T extends string> {
    value: T
    label: ReactNode
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    label: string
    items: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: T
    onChange: (value: T) => void
    className?: string
    readonly?: boolean
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const { value, defaultValue, label, items, readonly, onChange, className } =
        props
    const { refs, floatingStyles } = useFloating({
        placement: 'bottom-start',
        middleware: [flip(), offset(4), shift()],
    })

    return (
        <HStack
            gap={'12'}
            alignItems={'center'}
        >
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <Listbox
                value={value}
                defaultValue={defaultValue}
                as="div"
                className={classNames([cls.listBox, className])}
                disabled={readonly}
                onChange={onChange}
                ref={refs.setReference}
            >
                <Listbox.Button className={cls.trigger}>
                    {value ?? defaultValue}
                    <CaretDown />
                </Listbox.Button>
                <Listbox.Options
                    className={cls.options}
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
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected ? <CheckedIcon /> : <div></div>}
                                    {item.label}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    )
}
