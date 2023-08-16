import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlesFilters } from './ArticlesFilters'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'shared/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesFilters>

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />

export const Normal = Template.bind({})
Normal.decorators = [
  StoreDecorator({})
]
