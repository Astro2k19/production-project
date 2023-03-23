import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = () => <ArticleDetails />

export const ArticleDetailsComponent = Template.bind({})

ArticleDetailsComponent.args = {}
