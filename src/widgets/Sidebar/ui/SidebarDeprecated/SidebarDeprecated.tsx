import React, { memo } from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import ToggleSidebarIcon from '@/shared/assets/icons/sidebar-toggle.svg'
import { classNames } from '@/shared/lib'
import {
    Button,
    ButtonSizes,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './SidebarDeprecated.module.scss'

interface SidebarDeprecatedProps {
    className?: string
    collapsed: boolean
    items: Array<ReturnType<typeof SidebarItem>>
    toggleSidebar: () => void
}

export const SidebarDeprecated = memo((props: SidebarDeprecatedProps) => {
    const { className, collapsed, items, toggleSidebar } = props
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
                    {items}
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
})
