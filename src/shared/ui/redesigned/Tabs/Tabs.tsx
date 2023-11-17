import { useCallback } from 'react'

import { typedMemo } from '../../../const/typedMemo'
import { Button } from '../Button'
import { Flex, FlexDirectionOptions } from '../Stack'

export interface TabItem<T extends string> {
    value: T
    label: string
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    value?: T
    onClick: (newValue: T) => void
    direction?: FlexDirectionOptions
}

export const Tabs = typedMemo(
    <T extends string>({
        className,
        tabs,
        value,
        onClick,
        direction = 'row',
    }: TabsProps<T>) => {
        const onClickHandler = useCallback(
            (newValue: T) => () => {
                onClick(newValue)
            },
            [onClick],
        )

        return (
            <Flex
                gap={'8'}
                className={className}
                direction={direction}
                alignItems={'start'}
            >
                {tabs.map(tabItem => (
                    <Button
                        key={tabItem.value}
                        onClick={onClickHandler(tabItem.value)}
                        variant={value === tabItem.value ? 'filled' : 'clear'}
                        border={'round'}
                    >
                        {tabItem.label}
                    </Button>
                ))}
            </Flex>
        )
    },
)
