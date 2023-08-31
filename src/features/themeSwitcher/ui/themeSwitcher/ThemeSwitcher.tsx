// import cls from './ThemeSwitcher.module.scss'
import { classNames } from '@/shared/lib'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import ThemeSwitcherIcon from '@/shared/assets/icons/theme-light.svg'
import { memo } from 'react'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
      <Button
            className={classNames([className])}
            onClick={toggleTheme}
            variant={ButtonVariants.CLEAR}>
          <ThemeSwitcherIcon className={cls.themeSwitcherIcon} />
      </Button>
  )
})
