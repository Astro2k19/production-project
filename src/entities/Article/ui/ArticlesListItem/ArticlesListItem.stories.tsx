import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlesListItem } from './ArticlesListItem'
import { article } from '../../mocks/data'
import { ArticlesListView } from '../../model/types/article'

export default {
  title: 'entities/Article/ArticlesListItem',
  component: ArticlesListItem,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesListItem>

const Template: ComponentStory<typeof ArticlesListItem> = (args) => <ArticlesListItem {...args} />

export const Grid = Template.bind({})

Grid.args = {
  article,
  view: ArticlesListView.GRID
}

export const List = Template.bind({})

List.args = {
  article,
  view: ArticlesListView.LIST
}
