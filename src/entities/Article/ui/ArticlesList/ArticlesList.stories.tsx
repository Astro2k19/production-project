import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlesList } from './ArticlesList'
import { article } from '../../mocks/data'
import { ArticlesListView } from 'entities/Article/model/types/article'

export default {
  title: 'entities/Article/ArticlesList',
  component: ArticlesList,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesList>

const Template: ComponentStory<typeof ArticlesList> = (args) => <ArticlesList {...args} />

export const Grid = Template.bind({})

Grid.args = {
  articles: new Array(9).fill(0).map(() => article)
}

export const List = Template.bind({})

List.args = {
  articles: new Array(3).fill(0).map(() => article),
  view: ArticlesListView.LIST
}

export const IsLoadingGrid = Template.bind({})

IsLoadingGrid.args = {
  isLoading: true
}

export const IsLoadingList = Template.bind({})

IsLoadingList.args = {
  isLoading: true,
  view: ArticlesListView.LIST
}
