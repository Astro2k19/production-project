import React, { memo } from 'react'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkVariants } from 'shared/ui'
import { type SidebarItemType } from '../../model/items'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { getUserAuthDate } from 'entities/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useAppSelector(getUserAuthDate)
  const { t } = useTranslation()

  if (item.isProtected && !isAuth) {
    return null
  }

  return (
      <AppLink to={item.path} className={classNames([cls.item], { [cls.collapsed]: collapsed })} variant={AppLinkVariants.INVERTED}>
          <item.Icon className={cls.itemIcon} />
          <span>{t(item.text)}</span>
      </AppLink>
  )
})
