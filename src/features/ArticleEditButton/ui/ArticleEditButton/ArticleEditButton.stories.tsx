import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import { ArticleEditButton } from './ArticleEditButton'

export default {
    title: 'features/ArticleEditButton',
    component: ArticleEditButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withRouter,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
} as ComponentMeta<typeof ArticleEditButton>

const Template: ComponentStory<typeof ArticleEditButton> = args => (
    <ArticleEditButton {...args} />
)

export const Normal = Template.bind({})
Normal.args = { userId: '1' }
