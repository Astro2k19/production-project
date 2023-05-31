import cls from './Text.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'

export enum TextVariants {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
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

type TitleTextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TextType = 'p'

interface TextProps {
  className?: string
  title?: string
  TitleTag?: TitleTextType
  TextTag?: TextType
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
    size = TextSize.M,
    TitleTag = 'h3',
    TextTag = 'p',
  } = props

  return (
      <div className={classNames([cls.text, className, cls[variant], cls[align], cls[size]])}>
          {title && <TitleTag className={cls.title}>{title}</TitleTag>}
          {text && <TextTag className={cls.textContent}>{text}</TextTag>}
      </div>
  )
})
