import { type ForwardedRef, forwardRef } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib'

import cls from './AppLink.module.scss'

type AppLinkVariants = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariants
    classNameActive?: string
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className,
            children,
            variant = 'primary',
            classNameActive = '',
            ...otherProps
        } = props

        return (
            <NavLink
                {...otherProps}
                to={to}
                className={({ isActive }) =>
                    classNames([className, cls.appLink, cls[variant]], {
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
