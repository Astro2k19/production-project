import { type FC, type ReactNode } from 'react'
import cls from './Flex.module.scss'
import { classNames } from 'shared/lib'

type FlexDirectionOptions = 'row' | 'column'
type FlexJustifyOptions = 'start' | 'center' | 'end' | 'spaceBetween'
type FlexAlignItemsOptions = 'start' | 'center' | 'end' | 'stretch'
type FlexGapOptions = '4' | '8' | '12' | '16' | '32'

export interface FlexProps {
  children: ReactNode
  className?: string
  direction?: FlexDirectionOptions
  justify?: FlexJustifyOptions
  alignItems?: FlexAlignItemsOptions
  gap?: FlexGapOptions
  max?: boolean
}

const mappedDirection: Record<FlexDirectionOptions, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const mappedJustify: Record<FlexJustifyOptions, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  spaceBetween: cls.justifySpaceBetween
}

const mappedAlignItems: Record<FlexAlignItemsOptions, string> = {
  start: cls.alignItemsStart,
  center: cls.alignItemsCenter,
  end: cls.alignItemsEnd,
  stretch: cls.alignItemsStretch
}

const mappedGap: Record<FlexGapOptions, string> = {
  4: cls.gap4,
  8: cls.gap8,
  12: cls.gap12,
  16: cls.gap16,
  32: cls.gap32
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    children,
    direction = 'row',
    justify = 'start',
    alignItems = 'stretch',
    gap,
    className,
    max
  } = props

  const classes = [
    mappedDirection[direction],
    mappedJustify[justify],
    mappedAlignItems[alignItems],
    gap ? mappedGap[gap] : undefined,
    className
  ]

  const mods = {
    [cls.max]: max
  }

  return (
      <div className={classNames([cls.flex, ...classes], mods)}>
          {children}
      </div>
  )
}
