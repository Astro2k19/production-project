import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib'
import React, { type FC } from 'react'
import { ThemeSwitcher } from 'features/themeSwitcher'
import { LangSwitcher } from 'features/langSwitcher'
import { useTranslation } from 'react-i18next'
import ToggleSidebarIcon from 'shared/assets/icons/sidebar-toggle.svg'
import { AppLink, AppLinkVariants, Button, ButtonSizes, ButtonVariants } from 'shared/ui'
import HomeIcon from 'shared/assets/icons/home_icon.svg'
import AboutIcon from 'shared/assets/icons/about_icon.svg'
import { appPaths, AppRoutes } from 'shared/config/routerConfig/routerConfig'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const { t } = useTranslation()

  const toggleSidebar = (): void => {
    setCollapsed(prevState => !prevState)
  }

  return (
      <div className={classNames([cls.sidebar, className], { [cls.collapsed]: collapsed })} data-testid='sidebar'>
          <Button
              onClick={toggleSidebar}
              className={cls.toggleBtn}
              variant={ButtonVariants.BACKGROUND_INVERTED}
              size={ButtonSizes.L}
              data-testid='toggle-btn'
              square
          >
              <ToggleSidebarIcon className={classNames([cls.toggleIcon], { [cls.collapsed]: collapsed })} />
          </Button>
          <nav className={cls.navigation}>
              <div className={cls.items}>
                  <AppLink to={appPaths[AppRoutes.MAIN]} className={cls.item} variant={AppLinkVariants.INVERTED}>
                      <HomeIcon className={cls.itemIcon} />
                      <span>{t('Home')}</span>
                  </AppLink>
                  <AppLink to={appPaths[AppRoutes.ABOUT]} className={cls.item} variant={AppLinkVariants.INVERTED}>
                      <AboutIcon className={cls.itemIcon} />
                      <span>{t('About')}</span>
                  </AppLink>
              </div>
          </nav>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
