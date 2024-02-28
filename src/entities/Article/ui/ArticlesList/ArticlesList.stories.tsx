import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { ArticlesListView } from '../..'
import { article } from '../../mocks/data.mock'
import { ArticlesList } from './ArticlesList'

export default {
    title: 'entities/Article/ArticlesList',
    component: ArticlesList,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
} as ComponentMeta<typeof ArticlesList>

const Template: ComponentStory<typeof ArticlesList> = args => (
    <ArticlesList {...args} />
)

export const GridList = Template.bind({})

GridList.args = {
    articles: new Array(9).fill(0).map(() => article),
}

export const List = Template.bind({})

List.args = {
    articles: new Array(3).fill(0).map(() => article),
    view: ArticlesListView.LIST,
}

export const IsLoadingGrid = Template.bind({})

IsLoadingGrid.args = {
    isLoading: true,
    view: ArticlesListView.GRID,
}

export const IsLoadingList = Template.bind({})

IsLoadingList.args = {
    isLoading: true,
    view: ArticlesListView.LIST,
}
