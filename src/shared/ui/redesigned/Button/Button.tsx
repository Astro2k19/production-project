import { type ButtonHTMLAttributes, type ForwardedRef, forwardRef } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Button.module.scss'

type ButtonVariants = 'outline' | 'clear'

type ButtonSizes = 'M' | 'L' | 'XL'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
    size?: ButtonSizes
    type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'primary',
            size = 'M',
            type = 'button',
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
                    className,
                ])}
                ref={ref}
            >
                {children}
            </button>
        )
    },
)
