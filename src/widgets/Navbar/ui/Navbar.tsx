import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, AppLinkVariants } from 'shared/ui'
import { type FC } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className = '' }: NavbarProps) => {
  return (
      <div className={classNames([cls.navbar, className])}>
          <div className={cls.links}>
              <AppLink to={'/'} variant={AppLinkVariants.PRIMARY} >Home</AppLink>
              <AppLink to={'/about'} variant={AppLinkVariants.PRIMARY} >About</AppLink>
          </div>
      </div>
  )
}
