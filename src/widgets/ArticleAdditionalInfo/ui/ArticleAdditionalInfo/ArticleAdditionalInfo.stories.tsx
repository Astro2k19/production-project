import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo'

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleAdditionalInfo>

const Template: ComponentStory<typeof ArticleAdditionalInfo> = args => (
    <ArticleAdditionalInfo {...args} />
)

export const Normal = Template.bind({})
