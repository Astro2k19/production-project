import { type ButtonHTMLAttributes, type ForwardedRef, forwardRef } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Button.module.scss'

export enum ButtonVariants {
    DEFAULT = 'default',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSizes {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
    square?: boolean
    size?: ButtonSizes
    type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = ButtonVariants.DEFAULT,
            square = false,
            size = ButtonSizes.M,
            type = 'button',
            ...othersProps
        } = props

        const mods = {
            [cls.square]: square,
        }

        return (
            <button
                {...othersProps}
                type={type}
                className={classNames(
                    [cls.button, cls[variant], cls[size], className],
                    mods,
                )}
                ref={ref}
            >
                {children}
            </button>
        )
    },
)
