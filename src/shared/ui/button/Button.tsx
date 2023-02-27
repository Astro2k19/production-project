import cls from './Button.module.scss'
import { classNames } from 'shared/lib'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonVariants {
  DEFAULT = 'default',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariants.DEFAULT,
    square = false,
    size = ButtonSizes.M,
    ...othersProps
  } = props

  const mods = {
    [cls.square]: square
  }

  return (
      <button
          {...othersProps}
          type={'button'}
          className={
        classNames([cls.button, cls[variant], cls[size], className], mods
        )}
      >
          {children}
      </button>
  )
}
