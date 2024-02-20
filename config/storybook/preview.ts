import { addDecorator } from '@storybook/react'
import { withThemes } from 'storybook-addon-themes/react'

import {
    FeatureFlagsDecorator,
    StyleDecorator,
    SuspenseDecorator,
    getThemeSettings,
} from '@/shared/config/storybook'

import i18n from './i18next'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: getThemeSettings(),
    i18n,
    locale: 'en',
    locales: {
        en: 'English',
        ua: 'Ukrainian',
    },
}

addDecorator(StyleDecorator)
addDecorator(withThemes)
// addDecorator(withRouter)
addDecorator(SuspenseDecorator)
addDecorator(FeatureFlagsDecorator({}))

// export const decorators = [
//     StyleDecorator,
//     SuspenseDecorator,
//     FeatureFlagsDecorator({ test: true }),
//     withThemes,
//     withRouter,
// ]
