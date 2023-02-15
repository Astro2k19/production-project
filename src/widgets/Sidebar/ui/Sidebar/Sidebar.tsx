import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib'
import React, { type FC } from 'react'
import { ThemeSwitcher } from 'features/themeSwitcher'
import { LangSwitcher } from 'features/langSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC = ({ className = '' }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false)

  const toggleSidebar = (): void => {
    setCollapsed(prevState => !prevState)
  }

  return (
      <div className={classNames([cls.sidebar, className], { [cls.collapsed]: collapsed })} data-testid='sidebar'>
          <button onClick={toggleSidebar} data-testid='toggle-btn'>Toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
