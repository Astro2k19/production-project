import { type HTMLAttributes, type ReactNode } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Card.module.scss'

type CardVariants = 'normal' | 'outline' | 'light'
type CardPaddings = '0' | '8' | '16' | '24'
type CardBorder = 'normal' | 'round'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    variant?: CardVariants
    padding?: CardPaddings
    border?: CardBorder
}

const mappedPaddings: Record<CardPaddings, string> = {
    '0': cls.padding_0,
    '8': cls.padding_8,
    '16': cls.padding_16,
    '24': cls.padding_24,
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        padding = '8',
        border = 'normal',
        ...othersProps
    } = props

    return (
        <div
            {...othersProps}
            className={classNames([
                className,
                cls[variant],
                mappedPaddings[padding],
                cls[border],
            ])}
        >
            {children}
        </div>
    )
}
