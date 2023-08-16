import React, { memo } from 'react'
import cls from './Icon.module.scss'
import { classNames } from '@/shared/lib'

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IconProps) => {
  return (
      <div className={classNames([cls.icon, className, inverted ? cls.inverted : ''])}>
          <Svg />
      </div>
  )
})
