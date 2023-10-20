import { withRouter } from 'storybook-addon-react-router-v6'
import { withThemes } from 'storybook-addon-themes/react'

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { Theme } from '../../src/shared/const/theme'
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
	themes: {
		default: 'Light',
		list: [
			{ name: 'Light', class: ['app', Theme.LIGHT], color: '#e8e8ea' },
			{ name: 'Dark', class: ['app', Theme.DARK], color: '#090949' },
			{ name: 'Dusk', class: ['app', Theme.DUSK], color: '#4b4e71' },
		],
	},
	i18n,
	locale: 'en',
	locales: {
		en: 'English',
		ua: 'Ukrainian',
	},
}

// addDecorator(StyleDecorator)
// addDecorator(withThemes)
// addDecorator(withRouter)
// addDecorator(SuspenseDecorator)

export const decorators = [
	StyleDecorator,
	SuspenseDecorator,
	withThemes,
	withRouter,
]
