import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleSingleRecommendations } from './ArticleSingleRecommendations'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ArticleSingleRecommendations',
  component: ArticleSingleRecommendations,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSingleRecommendations>

const Template: ComponentStory<typeof ArticleSingleRecommendations> = (args) => <ArticleSingleRecommendations {...args} />

export const Normal = Template.bind({})
Normal.decorators = [
  StoreDecorator({
    articlesPageList: {

    }
  })
]
