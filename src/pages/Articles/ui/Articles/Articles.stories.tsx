import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticlesPage from './Articles'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { article } from '@/entities/Article'

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

Articles.decorators = [
  StoreDecorator({
    articlesPageList: {
      ids: [1, 2],
      entities: {
        1: { ...article, id: 1 },
        2: { ...article, id: 2 }
      }
    }
  })
]
