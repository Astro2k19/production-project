import {
    type ComponentPropsWithoutRef,
    type HTMLAttributes,
    type ReactNode,
} from 'react'

import { classNames } from '@/shared/lib'

import cls from './Flex.module.scss'

export type FlexDirectionOptions = 'row' | 'column'
type FlexJustifyOptions = 'start' | 'center' | 'end' | 'spaceBetween'
type FlexAlignItemsOptions = 'start' | 'center' | 'end' | 'stretch'
type FlexGapOptions = '4' | '8' | '12' | '16' | '32'

type ValidTags = keyof JSX.IntrinsicElements

export type FlexProps<T extends ValidTags = 'div'> = {
    children: ReactNode
    tag?: T | ValidTags
    className?: string
    direction?: FlexDirectionOptions
    justify?: FlexJustifyOptions
    alignItems?: FlexAlignItemsOptions
    gap?: FlexGapOptions
    noShrink?: boolean
    max?: boolean
} & (ComponentPropsWithoutRef<T> & HTMLAttributes<HTMLOrSVGElement>)

const DEFAULT_TAG = 'div' as const

const mappedDirection: Record<FlexDirectionOptions, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
}

const mappedJustify: Record<FlexJustifyOptions, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    spaceBetween: cls.justifySpaceBetween,
}

const mappedAlignItems: Record<FlexAlignItemsOptions, string> = {
    start: cls.alignItemsStart,
    center: cls.alignItemsCenter,
    end: cls.alignItemsEnd,
    stretch: cls.alignItemsStretch,
}

const mappedGap: Record<FlexGapOptions, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    32: cls.gap32,
}

export const Flex = <T extends ValidTags = typeof DEFAULT_TAG>(
    props: FlexProps<T>,
) => {
    const {
        children,
        direction = 'row',
        justify = 'start',
        alignItems = 'stretch',
        gap,
        className,
        max,
        noShrink = false,
        tag = 'div',
        ...attributes
    } = props

    const classes = [
        mappedDirection[direction],
        mappedJustify[justify],
        mappedAlignItems[alignItems],
        gap ? mappedGap[gap] : undefined,
        className,
    ]

    const mods = {
        [cls.max]: max,
        [cls.noShrink]: noShrink,
    }

    const Tag: ValidTags = tag

    return (
        <Tag
            {...attributes}
            className={classNames([cls.flex, ...classes], mods)}
        >
            {children}
        </Tag>
    )
}
