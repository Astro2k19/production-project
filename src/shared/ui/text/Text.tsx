import cls from './Text.module.scss'
import { classNames } from 'shared/lib'
import { type FC } from 'react'

export enum TextVariants {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  variant?: TextVariants
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    title,
    text,
    variant = TextVariants.PRIMARY
  } = props

  return (
      <div className={classNames([cls.text, className, cls[variant]])}>
          {title && <h3 className={cls.title}>{title}</h3>}
          {text && <p className={cls.textContent}>{text}</p>}
      </div>
  )
}
