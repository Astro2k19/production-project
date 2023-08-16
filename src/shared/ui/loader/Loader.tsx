import cls from './Loader.module.scss'
import { classNames } from '@/shared/lib'
import { memo } from 'react'

interface LoaderProps {
  className?: string
}

export const Loader = memo(({ className }: LoaderProps) => {
  return (
      <div className={classNames([cls.loader, className])}>
          <svg className={cls.circular} viewBox="25 25 50 50">
              <circle className={cls.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
          </svg>
      </div>
  )
})
