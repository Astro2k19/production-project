import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleCodeBlockComponent,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleCodeBlockComponent>

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = () => <ArticleCodeBlockComponent />

export const ArticleCodeBlock = Template.bind({})

ArticleCodeBlock.args = {}
