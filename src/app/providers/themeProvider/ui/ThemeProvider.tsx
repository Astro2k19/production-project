import React, {
    type FC,
    type ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react'

import { getUserAuthDate, useUserJsonSettings } from '@/entities/User'

import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/context/theme'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const { theme: defaultTheme } = useUserJsonSettings()
    const [isThemeInited, setIsThemeInited] = useState(false)
    const authDate = useAppSelector(getUserAuthDate)
    const [theme, setTheme] = useState<Theme>(
        initialTheme ?? defaultTheme ?? Theme.DUSK,
    )

    useEffect(() => {
        if (!authDate?.id) {
            setIsThemeInited(false)
            document.body.className = Theme.DUSK
        }
    }, [authDate?.id])

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setIsThemeInited(true)
            document.body.className = defaultTheme
        }
    }, [defaultTheme]) // eslint-disable-line

    const defaultValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}
