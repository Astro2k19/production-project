// import cls from './ThemeSwitcher.module.scss'
import { memo, useCallback } from 'react'

import { setJsonSettings } from '@/entities/User'

import ThemeSwitcherIcon from '@/shared/assets/icons/ThemeIcon.svg'
import ThemeSwitcherIconDeprecated from '@/shared/assets/icons/theme-light.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Icon
                    clickable
                    onClick={onSaveTheme}
                    Svg={ThemeSwitcherIcon}
                />
            }
            off={
                <ButtonDeprecated
                    className={classNames([className])}
                    onClick={onSaveTheme}
                    variant={ButtonVariants.CLEAR}
                >
                    <ThemeSwitcherIconDeprecated
                        className={cls.themeSwitcherIcon}
                    />
                </ButtonDeprecated>
            }
        />
    )
})
