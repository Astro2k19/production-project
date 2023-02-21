import { addDecorator } from '@storybook/react'
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator'

import { withThemes } from 'storybook-addon-themes/react'
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator'
import { errorDecorator } from '../../src/shared/config/storybook/errorDecorator/errorDecorator'
import i18n from './i18next'

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
      { name: 'Light', class: ['app_light_theme'], color: '#e8e8ea' },
      { name: 'Dark', class: ['app_dark_theme'], color: '#090949' }
    ]
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ua: 'Ukrainian'
  }
}
addDecorator(errorDecorator)
addDecorator(styleDecorator)
addDecorator(withThemes)
addDecorator(routerDecorator)
