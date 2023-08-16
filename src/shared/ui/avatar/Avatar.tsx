import { type CSSProperties, memo, useMemo } from 'react'
import cls from './Avatar.module.scss'
import { classNames } from '@/shared/lib'

interface AvatarProps {
  className?: string
  size?: number
  src?: string
  alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, size = 100, src, alt } = props

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size])

  return (
      <div className={classNames([cls.wrapper, className])} style={style}>
          <img src={src} className={classNames([cls.avatar])} alt={alt}/>
      </div>
  )
})
