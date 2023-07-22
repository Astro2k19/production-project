import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'

import { withThemes } from 'storybook-addon-themes/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import i18n from './i18next'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  themes: {
    default: 'Light',
    list: [
      { name: 'Light', class: ['app', 'app_light_theme'], color: '#e8e8ea' },
      { name: 'Dark', class: ['app', 'app_dark_theme'], color: '#090949' }
    ]
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ua: 'Ukrainian'
  }
}

// addDecorator(StyleDecorator)
// addDecorator(withThemes)
// addDecorator(withRouter)
// addDecorator(SuspenseDecorator)

export const decorators = [StyleDecorator, SuspenseDecorator, withThemes, withRouter]
