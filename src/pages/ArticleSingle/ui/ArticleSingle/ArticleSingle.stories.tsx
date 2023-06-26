import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticleSinglePage from './ArticleSingle'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { article as data } from 'entities/Article'

export default {
  title: 'pages/ArticleSingle',
  component: ArticleSinglePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSinglePage>

const Template: ComponentStory<typeof ArticleSinglePage> = () => <ArticleSinglePage />

export const ArticleSingle = Template.bind({})

ArticleSingle.args = {}
ArticleSingle.story = {
  parameters: {
    reactRouter: {
      routePath: '/articles/:id',
      routeParams: { id: '1' }
    }
  }
}

ArticleSingle.decorators = [StoreDecorator({
  articleDetails: {
    data
  }
})]
