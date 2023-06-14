import { Fragment, type ReactNode } from 'react'
import { Listbox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import { classNames } from 'shared/lib'
import { HStack } from '../stack'

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

// const people = [
//   { id: 1, value: 'usd', content: 'Usd', disabled: false },
//   { id: 2, value: 'eur', content: 'Eur', disabled: false },
//   { id: 3, value: 'uah', content: 'Uah', disabled: false },
//   { id: 4, value: 'pln', content: 'Pln', disabled: true }
// ]

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const { value, defaultValue, label, items, readonly, onChange, className } = props

  return (
      <HStack gap={'5'}>
          {label && <span>{label}</span>}
          <Listbox
              value={value}
              defaultValue={defaultValue}
              as='div'
              className={classNames([cls.listBox, className])}
              disabled={readonly}
              onChange={onChange}
          >
              <Listbox.Button className={cls.trigger}>{value ?? defaultValue}</Listbox.Button>
              <Listbox.Options>
                  {items.map((item) => (
                      <Listbox.Option
                          key={item.value}
                          value={item.value}
                          disabled={item.disabled}
                          as={Fragment}
                          className={cls.options}
                      >
                          {({ active, selected }) => (
                              <li className={classNames([cls.item], { [cls.selected]: selected, [cls.active]: active })}>
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
