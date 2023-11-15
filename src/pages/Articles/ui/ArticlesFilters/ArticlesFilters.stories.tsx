import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { ArticlesFilters } from './ArticlesFilters'

export default {
    title: 'features/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesFilters>

const Template: ComponentStory<typeof ArticlesFilters> = args => (
    <ArticlesFilters {...args} />
)

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({})]
