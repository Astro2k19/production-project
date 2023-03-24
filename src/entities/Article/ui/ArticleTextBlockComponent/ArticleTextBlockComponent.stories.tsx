import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleTextBlockComponent,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleTextBlockComponent>

const Template: ComponentStory<typeof ArticleTextBlockComponent> = () => <ArticleTextBlockComponent />

export const ArticleTextBlock = Template.bind({})

ArticleTextBlock.args = {}
