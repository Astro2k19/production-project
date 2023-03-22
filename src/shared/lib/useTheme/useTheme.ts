import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface useThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let themeName

    switch (theme) {
      case Theme.LIGHT:
        themeName = Theme.DARK
        break
      case Theme.DARK:
        themeName = Theme.DUSK
        break
      case Theme.DUSK:
        themeName = Theme.LIGHT
        break
      default:
        themeName = Theme.LIGHT
    }

    if (setTheme) {
      setTheme(themeName)
      document.body.className = themeName
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName)
  }

  return <useThemeResult>{ theme, toggleTheme }
}
