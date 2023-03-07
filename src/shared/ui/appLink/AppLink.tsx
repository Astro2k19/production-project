import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib'
import { Link, type LinkProps } from 'react-router-dom'
import { memo } from 'react'

export enum AppLinkVariants {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariants
}

export const AppLink = memo((props: AppLinkProps) => {
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
              className={classNames([className, cls[variant], cls.appLink])}>
          {children}
      </Link>
  )
})
