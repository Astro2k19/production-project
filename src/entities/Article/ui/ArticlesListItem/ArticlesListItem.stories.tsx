import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { article } from '../../mocks/data.mock'
import { ArticlesListView } from '../../model/const/articleConst'
import { ArticlesListItem } from './ArticlesListItem'

export default {
    title: 'entities/Article/ArticlesListItem',
    component: ArticlesListItem,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
} as ComponentMeta<typeof ArticlesListItem>

const Template: ComponentStory<typeof ArticlesListItem> = args => (
    <ArticlesListItem {...args} />
)

export const GridItem = Template.bind({})

GridItem.args = {
    article,
    view: ArticlesListView.GRID,
}

export const ListItem = Template.bind({})

ListItem.args = {
    article,
    view: ArticlesListView.LIST,
}
