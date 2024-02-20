import React, {
    type FC,
    type ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react'

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/context/theme'

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const [isThemeInited, setIsThemeInited] = useState(false)
    const [theme, setTheme] = useState<Theme>(
        initialTheme ?? fallbackTheme ?? Theme.DUSK,
    )

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme)
            setIsThemeInited(true)
            document.body.className = initialTheme
        }
    }, [initialTheme]) // eslint-disable-line

    useEffect(() => {
        document.body.className = theme
    }, [theme])

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
