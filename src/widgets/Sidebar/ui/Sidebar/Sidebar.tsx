import React, { type FC, useMemo } from 'react'

import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'

import { getSidebarItems } from '../../selectors/getSidebarItems/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarRedesigned } from '../SidebarRedesigned/SidebarRedesigned'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const sidebarItems = useAppSelector(getSidebarItems)

    const toggleSidebar = (): void => {
        setCollapsed(prevState => !prevState)
    }

    const items = useMemo<Array<ReturnType<typeof SidebarItem>>>(
        () =>
            sidebarItems.map(item => (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItems],
    )

    return (
        <SidebarRedesigned
            className={className}
            items={items}
            toggleSidebar={toggleSidebar}
            collapsed={collapsed}
        />
    )
}
