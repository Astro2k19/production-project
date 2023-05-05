import cls from './Card.module.scss'
import { classNames } from 'shared/lib'
import { type HTMLAttributes, memo, type ReactNode } from 'react'

enum CardVariants {
  Normal = 'normal',
  Outline = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariants
}

export const Card = (props: CardProps) => {
  const {
    className,
    children,
    variant = CardVariants.Normal,
    ...othersProps
  } = props

  return (
      <div
          {...othersProps}
          className={classNames([cls.card, className, cls[variant]])}
      >
          {children}
      </div>
  )
}
