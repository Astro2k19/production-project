import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleTabTypes } from './ArticleTabTypes'

export default {
  title: 'features/ArticleFilters/ArticleTabTypes',
  component: ArticleTabTypes,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleTabTypes>

const Template: ComponentStory<typeof ArticleTabTypes> = (args) => <ArticleTabTypes {...args} />

export const Normal = Template.bind({})
