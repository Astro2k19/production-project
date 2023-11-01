import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import avatar from '@/shared/assets/images/tests/avatar.jpg'

import { CommentsList } from './CommentsList'

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentsList>

const Template: ComponentStory<typeof CommentsList> = args => (
    <CommentsList {...args} />
)

export const Normal = Template.bind({})

Normal.args = {
    comments: [
        {
            text: 'comment 1',
            id: 1,
            user: {
                id: '1',
                avatar,
                username: 'Artem',
            },
        },
        {
            text: 'comment 2',
            id: 2,
            user: {
                id: '1',
                avatar,
                username: 'Artem',
            },
        },
        {
            text: 'comment 3',
            id: 3,
            user: {
                id: '1',
                avatar,
                username: 'Artem',
            },
        },
    ],
}

export const Loading = Template.bind({})

Loading.args = {
    isLoading: true,
}
