import React, { type FC, useMemo } from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import ToggleArrow from '@/shared/assets/icons/ToggleArrow.svg'
import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { getSidebarItems } from '../../selectors/getSidebarItems/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
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
        <VStack
            tag="section"
            className={classNames([cls.sidebarRedesigned, className], {
                [cls.collapsed]: collapsed,
            })}
            justify={'spaceBetween'}
            data-testid="sidebar"
        >
            <div>
                <AppLogo
                    className={cls.logo}
                    // size={collapsed ? 32 : 54}
                />
                <nav>
                    <VStack gap={'8'}>{items}</VStack>
                </nav>
            </div>
            <HStack
                justify={'center'}
                alignItems={'center'}
                gap={'16'}
                className={cls.switchers}
            >
                <ThemeSwitcher />
                <LangSwitcher />
            </HStack>
            <Icon
                Svg={ToggleArrow}
                width={32}
                height={250}
                clickable
                onClick={toggleSidebar}
                className={classNames([cls.toggleBtn])}
                data-testid={'ToggleButton'}
            />
        </VStack>
    )
}
