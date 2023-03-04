import cls from './Loader.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'

interface LoaderProps {
  className?: string
}

export const Loader = memo(({ className }: LoaderProps) => {
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
})
