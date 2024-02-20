import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import App from '@/app/index'
import { StoreProvider } from '@/app/providers/storeProvider'

import { PageError } from '@/widgets/PageError'

import '@/shared/config/i18n/i18n'
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate'

createRoot(document.querySelector('#root') as HTMLDivElement).render(
    <StoreProvider>
        <ForceUpdateProvider>
            <BrowserRouter>
                <ErrorBoundary
                    FallbackComponent={PageError}
                    onError={console.log}
                >
                    <App />
                </ErrorBoundary>
            </BrowserRouter>
        </ForceUpdateProvider>
    </StoreProvider>,
)
export { Theme } from '@/shared/const/theme'
export { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'
export { ThemeContext } from '@/shared/context/theme'
