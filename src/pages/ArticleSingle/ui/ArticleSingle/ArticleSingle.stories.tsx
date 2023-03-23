import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticleSingle from './ArticleSingle'

export default {
  title: 'pages/ArticleSingle',
  component: ArticleSingle,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSingle>

const Template: ComponentStory<typeof ArticleSingle> = () => <ArticleSingle />

export const ArticleSinglePage = Template.bind({})

ArticleSinglePage.args = {}
