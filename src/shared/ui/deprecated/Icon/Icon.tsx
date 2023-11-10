import React, { SVGProps, memo } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Icon.module.scss'

interface IconProps extends SVGProps<SVGElement> {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    inverted?: boolean
}

/*
 * It is preferable to use the new redesigned component!
 * @deprecated
 * */

export const Icon = memo(
    ({ className, Svg, inverted, ...others }: IconProps) => {
        return (
            <Svg
                {...others}
                className={classNames([
                    cls.icon,
                    className,
                    inverted ? cls.inverted : '',
                ])}
            />
        )
    },
)
