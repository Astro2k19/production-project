import { type FC } from 'react'
import cls from './Icon.module.scss'
import { classNames } from 'shared/lib'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon: FC<IconProps> = ({ className, Svg }) => {
  return (
      <div className={classNames([cls.icon, className])}>
          <Svg />
      </div>
  )
}
