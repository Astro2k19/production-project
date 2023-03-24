import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleImageBlockComponent,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleImageBlockComponent>

const Template: ComponentStory<typeof ArticleImageBlockComponent> = () => <ArticleImageBlockComponent />

export const ArticleImageBlock = Template.bind({})

ArticleImageBlock.args = {}
