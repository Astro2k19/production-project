import { type ForwardedRef, forwardRef } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib'

import cls from './AppLink.module.scss'

type AppLinkVariants = 'primary' | 'red'
type AppLinkSize = 'S' | 'M' | 'L'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariants
    classNameActive?: string
    size?: AppLinkSize
}

const mappedSize: Record<AppLinkSize, string> = {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className,
            children,
            variant = 'primary',
            classNameActive = '',
            size = 'S',
            ...otherProps
        } = props

        const classes = [className, cls.appLink, cls[variant], mappedSize[size]]

        return (
            <NavLink
                {...otherProps}
                to={to}
                className={({ isActive }) =>
                    classNames(classes, {
                        [classNameActive]: isActive,
                    })
                }
                ref={ref}
            >
                {children}
            </NavLink>
        )
    },
)
