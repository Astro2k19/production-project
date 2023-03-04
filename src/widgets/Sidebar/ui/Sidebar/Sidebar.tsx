import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib'
import React, { type FC, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'features/themeSwitcher'
import { LangSwitcher } from 'features/langSwitcher'
import ToggleSidebarIcon from 'shared/assets/icons/sidebar-toggle.svg'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui'
import { sidebarItems } from '../../../Sidebar/model/items'
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [counter, setCounter] = useState(0)

  const toggleSidebar = (): void => {
    setCollapsed(prevState => !prevState)
  }

  return (
      <div className={classNames([cls.sidebar, className], { [cls.collapsed]: collapsed })} data-testid='sidebar'>
          <button onClick={() => { setCounter(counter + 1) }}>click</button>
          <Button
              onClick={toggleSidebar}
              className={cls.toggleBtn}
              variant={ButtonVariants.BACKGROUND_INVERTED}
              size={ButtonSizes.L}
              data-testid='toggle-btn'
              square
          >
              <ToggleSidebarIcon className={classNames([cls.toggleIcon])} />
          </Button>
          <nav className={cls.navigation}>
              <div className={cls.items}>
                  {sidebarItems.map(item => (
                      <SidebarItem item={item} key={item.path} collapsed={collapsed} />
                  ))}
              </div>
          </nav>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
