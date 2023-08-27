import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlesFiltersSelectors } from './ArticlesFiltersSelectors'

export default {
  title: 'features/ArticleFilters/ArticlesFiltersSelectors',
  component: ArticlesFiltersSelectors,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesFiltersSelectors>

const Template: ComponentStory<typeof ArticlesFiltersSelectors> = (args) => <ArticlesFiltersSelectors {...args} />

export const Normal = Template.bind({})
