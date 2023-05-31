import { memo, useCallback } from 'react'
import cls from './Tabs.module.scss'
import { classNames } from 'shared/lib'
import { Card } from '../card/Card'
import { HStack } from '../stack'

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

const typedMemo: <T>(c: T) => T = memo

export const Tabs = typedMemo(<T extends string>({ className, tabs, value, onClick }: TabsProps<T>) => {
  const onClickHandler = useCallback((newValue: T) => () => {
    onClick(newValue)
  }, [onClick])

  return (
      <HStack gap={'16'} className={className}>
          {tabs.map(tabItem => (
              <Card
                    key={tabItem.value}
                    onClick={onClickHandler(tabItem.value)}
                    className={classNames([cls.tabItem], { [cls.selected]: value === tabItem.value })}
              >
                  {tabItem.label}
              </Card>
          ))}
      </HStack>
  )
})
