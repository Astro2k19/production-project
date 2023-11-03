import React, {
    type FC,
    type ReactNode,
    useEffect,
    useMemo,
    useState,
} from 'react'

import { useUserJsonSettings } from '@/entities/User'

import { Theme } from '@/shared/const/theme'
import { ThemeContext } from '@/shared/context/theme'

interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const { theme: defaultTheme = Theme.DUSK } = useUserJsonSettings()
    // const [isThemeInited, setIsThemeInited] = useState(false)
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)
    // console.log(initialTheme ?? defaultTheme, 'initialTheme ?? defaultTheme')

    useEffect(() => {
        document.body.className = defaultTheme
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
