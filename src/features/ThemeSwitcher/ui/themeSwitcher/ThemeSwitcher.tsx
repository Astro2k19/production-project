// import cls from './ThemeSwitcher.module.scss'
import { memo, useCallback } from 'react'

import { setJsonSettings } from '@/entities/User'

import ThemeSwitcherIcon from '@/shared/assets/icons/ThemeIcon.svg'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { Theme } from '@/shared/const/theme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()
    const dispatch = useAppDispatch()

    const onSaveTheme = useCallback(() => {
        toggleTheme((theme: Theme) => {
            dispatch(setJsonSettings({ theme }))
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
        })
    }, [toggleTheme, dispatch])

    return (
        <Icon
            clickable
            onClick={onSaveTheme}
            Svg={ThemeSwitcherIcon}
        />
    )
})
