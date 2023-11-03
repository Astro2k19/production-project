// import cls from './ThemeSwitcher.module.scss'
import { memo, useCallback } from 'react'

import { setJsonSettings } from '@/entities/User'

import ThemeSwitcherIcon from '@/shared/assets/icons/theme-light.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonVariants } from '@/shared/ui/Button'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()
    const dispatch = useAppDispatch()

    const onSaveTheme = useCallback(() => {
        toggleTheme((theme: Theme) => {
            dispatch(setJsonSettings({ theme }))
        })
    }, [toggleTheme, dispatch])

    return (
        <Button
            className={classNames([className])}
            onClick={onSaveTheme}
            variant={ButtonVariants.CLEAR}
        >
            <ThemeSwitcherIcon className={cls.themeSwitcherIcon} />
        </Button>
    )
})
