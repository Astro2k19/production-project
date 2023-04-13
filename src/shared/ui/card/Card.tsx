import cls from './Card.module.scss'
import { classNames } from 'shared/lib'
import { type HTMLAttributes, memo, type ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = (props: CardProps) => {
  const { className, children, ...othersProps } = props

  return (
      <div
          {...othersProps}
          className={classNames([cls.card, className])}
      >
          {children}
      </div>
  )
}
