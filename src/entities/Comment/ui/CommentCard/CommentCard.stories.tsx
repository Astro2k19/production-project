import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import avatar from '@/shared/assets/images/tests/avatar.jpg'

import { CommentCard } from './CommentCard'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = args => (
    <CommentCard {...args} />
)

export const Normal = Template.bind({})

Normal.args = {
    comment: {
        text: 'comment 1',
        id: 1,
        user: {
            id: '1',
            avatar,
            username: 'Artem',
        },
    },
}

export const Loading = Template.bind({})

Loading.args = {
    isLoading: true,
}

Loading.parameters = {
    loki: {
        skip: true,
    },
}
