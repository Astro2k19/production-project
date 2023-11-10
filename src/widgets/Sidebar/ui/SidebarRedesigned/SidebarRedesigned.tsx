import React, { memo } from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import ToggleArrow from '@/shared/assets/icons/ToggleArrow.svg'
import { classNames } from '@/shared/lib'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './SidebarRedesigned.module.scss'

interface SidebarRedesignedProps {
    className?: string
    collapsed: boolean
    items: Array<ReturnType<typeof SidebarItem>>
    toggleSidebar: () => void
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className, collapsed, items, toggleSidebar } = props
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
            />
        </VStack>
    )
})
