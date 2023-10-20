import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { getRouteArticleEdit } from '@/shared/const/router'

import ArticleEditPage from './ArticleEditPage'

export default {
	title: 'pages/ArticleEdit',
	component: ArticleEditPage,
	decorators: [
		StoreDecorator({
			user: {
				authData: {},
			},
		}),
	],
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = () => (
	<ArticleEditPage />
)

export const ArticleEdit = Template.bind({})

ArticleEdit.parameters = {
	reactRouter: {
		routePath: getRouteArticleEdit(':id'),
		routeParams: { id: '1' },
	},
}

export const ArticleCreate = Template.bind({})
