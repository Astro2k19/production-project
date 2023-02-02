import React, {createContext, FC, useContext, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<React.PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    console.log('re-render provider') ;

    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return <ThemeContext.Provider value={defaultValue}>
                {children}
          </ThemeContext.Provider>
}