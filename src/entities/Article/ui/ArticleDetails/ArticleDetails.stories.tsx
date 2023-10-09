import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'

import { article, mockArticleResponse } from '../../mocks/data.mock'

import { ArticleDetails } from './ArticleDetails'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,

  decorators: [withMock, StoreDecorator({
    user: {
      authData: {
        id: '1'
      }
    }
  })],
  parameters: {
    mockData: [
      { ...mockArticleResponse, response: article }
    ]
  },
  args: {
    id: '1'
  }
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = () => <ArticleDetails id='1' />

export const Primary = Template.bind({})

export const withLoading = Template.bind({})

withLoading.args = {}

withLoading.parameters = {
  mockData: [
    { ...mockArticleResponse, response: article, delay: 2000 }
  ]
}
