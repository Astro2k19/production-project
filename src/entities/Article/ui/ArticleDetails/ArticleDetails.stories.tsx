import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from '../../mocks/data'
import { ArticleError } from '../../model/conts/articleConts'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = () => <ArticleDetails id='1' />

export const Primary = Template.bind({})

Primary.decorators = [StoreDecorator({
  articleDetails: {
    data: article
  }
})]

export const withLoading = Template.bind({})

withLoading.args = {}

withLoading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true
  }
})]

export const withNotFoundError = Template.bind({})

withNotFoundError.args = {}

withNotFoundError.decorators = [StoreDecorator({
  articleDetails: {
    error: {
      code: '404',
      message: ArticleError.NOT_FOUND
    }
  }
})]

export const withServerError = Template.bind({})

withServerError.args = {}

withServerError.decorators = [StoreDecorator({
  articleDetails: {
    error: {
      code: '404',
      message: ArticleError.SERVER_ERROR
    }
  }
})]
