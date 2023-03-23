import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import Articles from './Articles'

export default {
  title: 'pages/Articles',
  component: Articles,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Articles>

const Template: ComponentStory<typeof Articles> = () => <Articles />

export const ArticlesPage = Template.bind({})

ArticlesPage.args = {}
