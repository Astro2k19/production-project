import React, { type FC } from 'react'

import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import ToggleSidebarIcon from '@/shared/assets/icons/sidebar-toggle.svg'
import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Button, ButtonSizes, ButtonVariants } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'

import { getSidebarItems } from '../../selectors/getSidebarItems/getSidebarItems'
import { SidebarItem } from '../../ui/SidebarItem/SidebarItem'
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
