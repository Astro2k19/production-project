import { createRoot } from 'react-dom/client'
import { App } from '@/app/index'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/themeProvider'
import { ErrorBoundary } from 'react-error-boundary'
import { PageError } from '@/widgets/PageError'
import { StoreProvider } from '@/app/providers/storeProvider'
import '@/shared/config/i18n/i18n'

createRoot(document.querySelector('#root') as HTMLDivElement).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary FallbackComponent={PageError} onError={console.log}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
