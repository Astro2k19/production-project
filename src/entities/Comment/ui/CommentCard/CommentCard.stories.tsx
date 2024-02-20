import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import avatar from '@/shared/assets/images/tests/avatar.jpg'
import {
    RedesignedDesignDecorator,
    getThemeSettings,
} from '@/shared/config/storybook'

import { CommentCard } from './CommentCard'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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

export const NormalRedesigned = Template.bind({})

NormalRedesigned.story = {
    parameters: {
        themes: getThemeSettings(true),
    },
}
NormalRedesigned.decorators = [RedesignedDesignDecorator]

NormalRedesigned.args = {
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
