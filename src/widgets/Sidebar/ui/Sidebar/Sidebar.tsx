import React, { type FC } from 'react'

import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'

import { getSidebarItems } from '../../selectors/getSidebarItems/getSidebarItems'
import { SidebarOldDesign } from '../SidebarOldDesign/SidebarOldDesign'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const sidebarItems = useAppSelector(getSidebarItems)

    const toggleSidebar = (): void => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <section
                    className={classNames([cls.sidebarRedesigned, className], {
                        [cls.collapsed]: collapsed,
                    })}
                    data-testid="sidebar"
                >
                    new sidebar create layout, add color, fonts, app_redeisgedn
                    class, sidebar in progress, need other component
                </section>
            }
            off={
                <SidebarOldDesign
                    className={className}
                    sidebarItems={sidebarItems}
                    toggleSidebar={toggleSidebar}
                    collapsed={collapsed}
                />
            }
        />
    )
}
