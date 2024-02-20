import React, { ComponentType } from 'react'

import { useUserJsonSettings } from '@/entities/User'

import { ThemeProvider } from './ThemeProvider'

export const WithTheme = (Component: ComponentType) => {
    return () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { theme: defaultTheme } = useUserJsonSettings()

        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        )
    }
}
