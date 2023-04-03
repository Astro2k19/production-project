import cls from './Button.module.scss'
import { classNames } from 'shared/lib'
import { type ButtonHTMLAttributes, memo } from 'react'

export enum ButtonVariants {
  DEFAULT = 'default',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSizes {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  square?: boolean
  size?: ButtonSizes
  type?: 'button' | 'submit' | 'reset'
}

export const Button = memo((props: ButtonProps) => {
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
    [cls.square]: square
  }

  return (
      <button
          {...othersProps}
          type={type}
          className={
        classNames([cls.button, cls[variant], cls[size], className], mods
        )}
      >
          {children}
      </button>
  )
})
