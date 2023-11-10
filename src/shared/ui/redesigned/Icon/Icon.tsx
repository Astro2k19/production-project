import React, { SVGProps, memo } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Icon.module.scss'

type IconBaseProps = Omit<SVGProps<SVGElement>, 'onClick'>

interface IconDefaultProps extends IconBaseProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

interface NonClickableIconProps extends IconDefaultProps {
    clickable?: false
}

interface ClickableIconProps extends IconDefaultProps {
    clickable: true
    onClick: () => void
}

type IconProps = NonClickableIconProps | ClickableIconProps

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...others
    } = props

    const icon = (
        <Svg
            {...others}
            className={
                !clickable ? classNames([cls.icon, className]) : undefined
            }
            width={width}
            height={height}
            onClick={undefined}
        />
    )

    if (clickable) {
        return (
            <button
                className={classNames([cls.icon, cls.button, className])}
                onClick={props.onClick}
                style={{ width, height }}
            >
                {icon}
            </button>
        )
    }

    return icon
})
