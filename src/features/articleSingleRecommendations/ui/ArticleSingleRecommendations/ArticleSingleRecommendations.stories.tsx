import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleSingleRecommendations } from './ArticleSingleRecommendations'

export default {
  title: 'features/ArticleSingleRecommendations',
  component: ArticleSingleRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSingleRecommendations>

const Template: ComponentStory<typeof ArticleSingleRecommendations> = (args) => <ArticleSingleRecommendations {...args} />

export const Normal = Template.bind({})
