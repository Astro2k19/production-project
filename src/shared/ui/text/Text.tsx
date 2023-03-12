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

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariants
  align?: TextAligns
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = TextVariants.PRIMARY,
    align = TextAligns.LEFT
  } = props

  return (
      <div className={classNames([cls.text, className, cls[variant], cls[align]])}>
          {title && <h3 className={cls.title}>{title}</h3>}
          {text && <p className={cls.textContent}>{text}</p>}
      </div>
  )
})
