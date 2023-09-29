import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'

import ArticleSinglePage from './ArticleSingle'

import { article, article as data } from '@/entities/Article/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/ArticleSingle',
  component: ArticleSinglePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock],
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/articles?_limit=4&_expand=user`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: 1 },
          { ...article, id: 2 },
          { ...article, id: 3 }
        ]
      }
    ]
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
  // articleDetails: {
  //   data
  // }
})]
