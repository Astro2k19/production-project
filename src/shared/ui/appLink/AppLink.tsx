import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib'
import { Link, type LinkProps } from 'react-router-dom'
import { type ForwardedRef, forwardRef } from 'react'

export enum AppLinkVariants {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariants
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const {
    to,
    className,
    children,
    variant = AppLinkVariants.PRIMARY,
    ...otherProps
  } = props

  return (
      <Link {...otherProps}
            to={to}
            className={classNames([className, cls[variant], cls.appLink])}
            ref={ref}
      >
          {children}
      </Link>
  )
})
