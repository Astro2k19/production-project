import cls from './User.module.scss'
import { classNames } from 'shared/lib'
import { type FC } from 'react'

interface UserProps {
  className?: string
}

export const User: FC = ({ className }: UserProps) => {
  return (
      <div className={classNames([cls.user, className])}>

      </div>
  )
}
