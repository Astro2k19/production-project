import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticlesPage from './Articles'

export default {
  title: 'pages/Articles',
  component: ArticlesPage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />

export const Articles = Template.bind({})

Articles.args = {}
