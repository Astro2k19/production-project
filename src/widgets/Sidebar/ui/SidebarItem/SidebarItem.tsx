import React, { type FC, memo } from 'react'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkVariants } from 'shared/ui'
import { type SidebarItemType } from '../../model/items'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  console.log(collapsed)
  return (
      <AppLink to={item.path} className={classNames([cls.item, 'TEST'], { [cls.collapsed]: collapsed })} variant={AppLinkVariants.INVERTED}>
          <item.Icon className={cls.itemIcon} />
          <span>{t(item.text)}</span>
      </AppLink>
  )
})
