import cls from './PageLoader.module.scss'
import { classNames } from '@/shared/lib'
import { Loader } from '@/shared/ui'
import { type FC } from 'react'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC = ({ className }: PageLoaderProps) => {
  return (
      <div className={classNames([cls.pageLoader, className])}>
          <Loader />
      </div>
  )
}
