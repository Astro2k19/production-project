import { type DeepPartial } from '@reduxjs/toolkit'
import { type RenderResult, render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { type StoreSchema } from '@/app/providers/storeProvider'
import { StoreProvider } from '@/app/providers/storeProvider'
// eslint-disable-next-line authoring-project-plugin/import-layer-checker
import { ThemeProvider } from '@/app/providers/themeProvider'
import '@/app/styles/index.scss'

import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { Theme } from '@/shared/const/theme'

import { type ReducersList } from '../../DynamicModuleLoader/DynamicModuleLoader'

interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StoreSchema>
    asyncReducers?: ReducersList
    theme?: Theme
}

interface TestProviderProps {
    children: ReactNode
    options?: ComponentRenderOptions
}

export const TestProvider = ({ options, children }: TestProviderProps) => {
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options ?? {}

    return (
        <StoreProvider
            initialState={initialState as StoreSchema}
            asyncReducers={asyncReducers}
        >
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        {children}
                    </ThemeProvider>
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}

export const componentRender = (
    component: ReactNode,
    options: ComponentRenderOptions = {},
): RenderResult =>
    render(<TestProvider options={options}>{component}</TestProvider>)
