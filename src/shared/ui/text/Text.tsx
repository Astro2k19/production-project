import cls from './Text.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'

export enum TextVariants {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAligns {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariants
  align?: TextAligns
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = TextVariants.PRIMARY,
    align = TextAligns.LEFT,
    size = TextSize.M
  } = props

  return (
      <div className={classNames([cls.text, className, cls[variant], cls[align], cls[size]])}>
          {title && <h3 className={cls.title}>{title}</h3>}
          {text && <p className={cls.textContent}>{text}</p>}
      </div>
  )
})
