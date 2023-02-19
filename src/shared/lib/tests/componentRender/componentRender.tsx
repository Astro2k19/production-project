import { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { render, type RenderResult } from '@testing-library/react'

interface componentRenderOptions {
  route?: string
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}): RenderResult => {
  const {
    route = '/'
  } = options

  return render(
      <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18n}>
              {component}
          </I18nextProvider>
      </MemoryRouter>
  )
}
