import React, { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/lib'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  useEffect(() => {
    document.body.className = theme
  }, []) // eslint-disable-line

  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
      <ThemeContext.Provider value={defaultValue}>
          {children}
      </ThemeContext.Provider>
  )
}
