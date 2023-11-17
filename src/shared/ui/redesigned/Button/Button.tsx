import { type ButtonHTMLAttributes, type ForwardedRef, forwardRef } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Button.module.scss'

type ButtonVariants = 'outline' | 'clear' | 'filled'

type ButtonSizes = 'M' | 'L' | 'XL'

type ButtonBorders = 'normal' | 'round'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
    size?: ButtonSizes
    type?: 'button' | 'submit' | 'reset'
    border?: ButtonBorders
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
            ...othersProps
        } = props

        return (
            <button
                {...othersProps}
                type={type}
                className={classNames([
                    cls.button,
                    cls[variant],
                    cls[size],
                    cls[border],
                    className,
                ])}
                ref={ref}
            >
                {children}
            </button>
        )
    },
)
