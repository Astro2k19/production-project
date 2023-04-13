import cls from './Skeleton.module.scss'
import { classNames } from 'shared/lib'
import { type FC, type CSSProperties } from 'react'

interface SkeletonProps {
  className?: string
  width: string | number
  height: string | number
  borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    className,
    width,
    height,
    borderRadius
  } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius
  }

  return <div title={'Loading...'} style={styles} className={classNames([className, cls.skeleton])}></div>
}
