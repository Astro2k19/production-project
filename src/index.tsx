import { createRoot } from 'react-dom/client'
import { App } from 'app/index'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/themeProvider'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'react-error-boundary'
import { PageError } from 'widgets/PageError'

createRoot(document.querySelector('#root') as HTMLDivElement).render(
    <BrowserRouter>
        <ErrorBoundary FallbackComponent={PageError} onError={console.log}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
