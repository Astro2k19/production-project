import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { render, type RenderResult } from '@testing-library/react'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { StoreProvider } from 'app/providers/storeProvider'

interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StoreSchema>
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}): RenderResult => {
  const {
    route = '/',
    initialState
  } = options

  return render(
      <StoreProvider initialState={initialState as StoreSchema}>
          <MemoryRouter initialEntries={[route]}>
              <I18nextProvider i18n={i18n}>
                  {component}
              </I18nextProvider>
          </MemoryRouter>
      </StoreProvider>
  )
}
