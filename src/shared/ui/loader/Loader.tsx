import cls from './Loader.module.scss'
import { classNames } from 'shared/lib'
import { type FC } from 'react'

interface LoaderProps {
  className?: string
}

export const Loader: FC = ({ className }: LoaderProps) => {
  return (
      <div className={classNames([cls.ldsRoller, className])}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}
