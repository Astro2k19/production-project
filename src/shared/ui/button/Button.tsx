import cls from './Button.module.scss'
import { classNames } from 'shared/lib'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonVariants {
  DEFAULT = 'default',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariants.DEFAULT,
    ...othersProps
  } = props

  return (
      <button {...othersProps}
              data-testid='btn'
            type={'button'}
            className={classNames([cls.button, cls[variant], className])} >
          {children}
      </button>
  )
}
