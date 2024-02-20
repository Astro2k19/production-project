import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook'

import { ArticlesPageFilters } from './ArticlesPageFilters'

export default {
    title: 'features/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = args => (
    <ArticlesPageFilters {...args} />
)

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({})]
