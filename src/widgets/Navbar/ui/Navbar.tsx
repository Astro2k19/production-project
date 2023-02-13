import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, AppLinkVariants } from 'shared/ui'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames([cls.navbar, className])}>
          <div className={cls.links}>
              <AppLink to={'/'} variant={AppLinkVariants.PRIMARY}>{t('Home', { ns: 'translation' })}</AppLink>
              <AppLink to={'/about'} variant={AppLinkVariants.PRIMARY}>{t('About', { ns: 'translation' })}</AppLink>
          </div>
      </div>
  )
}
