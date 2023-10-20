import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { article } from '../../mocks/data.mock'
import { ArticlesListView } from '../../model/const/articleConst'
import { ArticlesListItem } from './ArticlesListItem'

export default {
	title: 'entities/Article/ArticlesListItem',
	component: ArticlesListItem,

	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticlesListItem>

const Template: ComponentStory<typeof ArticlesListItem> = args => (
	<ArticlesListItem {...args} />
)

export const Grid = Template.bind({})

Grid.args = {
	article,
	view: ArticlesListView.GRID,
}

export const List = Template.bind({})

List.args = {
	article,
	view: ArticlesListView.LIST,
}
