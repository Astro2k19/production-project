import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleError } from '../../model/types/article'
import { article } from '../../mocks/data'

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
    error: ArticleError.ARTICLE_NOT_FOUND
  }
})]

export const withError = Template.bind({})

withError.args = {}

withError.decorators = [StoreDecorator({
  articleDetails: {
    error: ArticleError.SERVER_ERROR
  }
})]
