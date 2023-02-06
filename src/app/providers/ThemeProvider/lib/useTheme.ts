import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): useThemeResult => {
    const {theme,setTheme} = useContext(ThemeContext);
    console.log('re-render use theme')

    const toggleTheme = () => {
        const themeName = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(themeName);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
    }

    return {theme, toggleTheme};
}