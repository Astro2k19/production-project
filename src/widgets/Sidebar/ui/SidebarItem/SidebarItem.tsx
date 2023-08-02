import React, { memo } from 'react'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkVariants } from 'shared/ui'
import { classNames } from 'shared/lib'
import { type SidebarItemType } from '../../model/types/sidebar'
import { useTranslation } from 'react-i18next'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  return (
      <AppLink to={item.path} className={classNames([cls.item], { [cls.collapsed]: collapsed })} variant={AppLinkVariants.INVERTED}>
          <item.Icon className={cls.itemIcon} />
          <span>{t(item.text)}</span> {/* i18next-extract-disable-line */}
      </AppLink>
  )
})
