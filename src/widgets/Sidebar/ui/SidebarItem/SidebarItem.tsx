import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon'

import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    return (
        <AppLink
            to={item.path}
            className={classNames([cls.itemRedesigned], {
                [cls.collapsedRedesigned]: collapsed,
            })}
            classNameActive={cls.active}
        >
            <Icon
                Svg={item.Icon}
                className={cls.itemIcon}
            />
            <span>{t(item.text)}</span>
        </AppLink>
    )
})
