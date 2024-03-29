import React, {
    type ButtonHTMLAttributes,
    type ForwardedRef,
    ReactNode,
    forwardRef,
} from 'react'

import { classNames } from '@/shared/lib'
import { Mods } from '@/shared/lib/classNames/classNames'

import cls from './Button.module.scss'

type ButtonVariants = 'outline' | 'clear' | 'filled'
type ButtonSizes = 'M' | 'L' | 'XL'
type ButtonBorders = 'normal' | 'round'
type ButtonAlign = 'left' | 'right' | 'center'
type ButtonColor = 'normal' | 'error' | 'success'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
    size?: ButtonSizes
    type?: 'button' | 'submit' | 'reset'
    border?: ButtonBorders
    addonLeft?: ReactNode
    addonRight?: ReactNode
    fullWidth?: boolean
    align?: ButtonAlign
    color?: ButtonColor
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'clear',
            size = 'M',
            type = 'button',
            border = 'normal',
            addonLeft,
            addonRight,
            fullWidth = false,
            align = 'left',
            color = 'normal',
            ...othersProps
        } = props

        const mods: Mods = {
            [cls.withLeftAddon]: Boolean(addonLeft),
            [cls.withRightAddon]: Boolean(addonRight),
            [cls.fullWidth]: fullWidth,
        }

        const classes = [
            cls.button,
            cls[variant],
            cls[size],
            cls[align],
            cls[border],
            cls[color],
            className,
        ]

        return (
            <button
                {...othersProps}
                type={type}
                className={classNames(classes, mods)}
                ref={ref}
            >
                {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
                {children}
                {addonRight && (
                    <div className={cls.addonRight}>{addonRight}</div>
                )}
            </button>
        )
    },
)
