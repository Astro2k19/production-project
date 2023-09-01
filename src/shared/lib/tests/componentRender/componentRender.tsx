import { type DeepPartial } from '@reduxjs/toolkit'
import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { type ReducersList } from '../../dynamicModuleLoader/DynamicModuleLoader'

import { type StoreSchema } from '@/app/providers/storeProvider'
import { StoreProvider } from '@/app/providers/storeProvider'
import i18nForTests from '@/shared/config/i18n/i18nForTests'

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
