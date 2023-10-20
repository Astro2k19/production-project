// import cls from './ThemeSwitcher.module.scss'
import { memo } from 'react'

import ThemeSwitcherIcon from '@/shared/assets/icons/theme-light.svg'
import { classNames } from '@/shared/lib'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonVariants } from '@/shared/ui/Button'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme()

	return (
		<Button
			className={classNames([className])}
			onClick={toggleTheme}
			variant={ButtonVariants.CLEAR}
		>
			<ThemeSwitcherIcon className={cls.themeSwitcherIcon} />
		</Button>
	)
})
