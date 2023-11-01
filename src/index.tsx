import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/app/index'
import { StoreProvider } from '@/app/providers/storeProvider'
import { ThemeProvider } from '@/app/providers/themeProvider'

import { PageError } from '@/widgets/PageError'

import '@/shared/config/i18n/i18n'

createRoot(document.querySelector('#root') as HTMLDivElement).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary
                FallbackComponent={PageError}
                onError={console.log}
            >
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
)
export { Theme } from '@/shared/const/theme'
export { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
export { ThemeContext } from '@/shared/context/theme'
