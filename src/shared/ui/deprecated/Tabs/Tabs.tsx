import { useCallback } from 'react'

import { classNames } from '@/shared/lib'

import { typedMemo } from '../../../const/typedMemo'
import { HStack } from '../../redesigned/Stack'
import { Card } from '../Card'
import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    label: string
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    value: T
    onClick: (newValue: T) => void
}

/*
 * It is preferable to use the new redesigned component!
 * @deprecated
 * */

export const Tabs = typedMemo(
    <T extends string>({ className, tabs, value, onClick }: TabsProps<T>) => {
        const onClickHandler = useCallback(
            (newValue: T) => () => {
                onClick(newValue)
            },
            [onClick],
        )

        return (
            <HStack
                gap={'16'}
                className={className}
            >
                {tabs.map(tabItem => (
                    <Card
                        key={tabItem.value}
                        onClick={onClickHandler(tabItem.value)}
                        className={classNames([cls.tabItem], {
                            [cls.selected]: value === tabItem.value,
                        })}
                    >
                        {tabItem.label}
                    </Card>
                ))}
            </HStack>
        )
    },
)
