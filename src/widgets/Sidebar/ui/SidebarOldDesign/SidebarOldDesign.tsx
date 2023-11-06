import React from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import ToggleSidebarIcon from '@/shared/assets/icons/sidebar-toggle.svg'
import { classNames } from '@/shared/lib'
import { Button, ButtonSizes, ButtonVariants } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'

import { SidebarItemType } from '../../model/types/sidebar'
import cls from '../Sidebar/Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarOldDesignProps {
    className?: string
    collapsed: boolean
    sidebarItems: SidebarItemType[]
    toggleSidebar: () => void
}

export const SidebarOldDesign = (props: SidebarOldDesignProps) => {
    const { className, collapsed, sidebarItems, toggleSidebar } = props
    return (
        <section
            className={classNames([cls.sidebar, className], {
                [cls.collapsed]: collapsed,
            })}
            data-testid="sidebar"
        >
            <Button
                onClick={toggleSidebar}
                className={cls.toggleBtn}
                variant={ButtonVariants.BACKGROUND_INVERTED}
                size={ButtonSizes.L}
                data-testid="toggle-btn"
                square
            >
                <ToggleSidebarIcon className={classNames([cls.toggleIcon])} />
            </Button>
            <nav className={cls.navigation}>
                <VStack
                    alignItems={'center'}
                    gap={'16'}
                >
                    {sidebarItems.map(item => (
                        <SidebarItem
                            item={item}
                            key={item.path}
                            collapsed={collapsed}
                        />
                    ))}
                </VStack>
            </nav>
            <VStack
                justify={'center'}
                alignItems={'center'}
                className={cls.switchers}
            >
                <ThemeSwitcher />
                <LangSwitcher />
            </VStack>
        </section>
    )
}
