import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { render, type RenderResult } from '@testing-library/react'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'
import { StoreProvider } from '@/app/providers/storeProvider'
import { type ReducersList } from '../../dynamicModuleLoader/DynamicModuleLoader'

interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StoreSchema>
  asyncReducers?: ReducersList
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}): RenderResult => {
  const {
    route = '/',
    initialState,
    asyncReducers
  } = options

  return render(
      <StoreProvider initialState={initialState as StoreSchema} asyncReducers={asyncReducers}>
          <MemoryRouter initialEntries={[route]}>
              <I18nextProvider i18n={i18nForTests}>
                  {component}
              </I18nextProvider>
          </MemoryRouter>
      </StoreProvider>
  )
}
