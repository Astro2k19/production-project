// import cls from './ThemeSwitcher.module.scss'
import { classNames, useTheme } from 'shared/lib'
import { Button, ButtonVariants } from 'shared/ui'
import ThemeSwitcherIcon from 'shared/assets/icons/theme-light.svg'
import { type FC } from 'react'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
      <Button
            className={classNames([className])}
            onClick={toggleTheme}
            variant={ButtonVariants.CLEAR}>
          <ThemeSwitcherIcon className={cls.themeSwitcherIcon} />
      </Button>
  )
}
