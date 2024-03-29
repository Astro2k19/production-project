import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { profile as data } from '../../mocks/profileMocks'
import { ProfileCard } from './ProfileCard'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = args => (
    <ProfileCard {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
    data,
}

export const Loading = Template.bind({})

Loading.args = {
    isLoading: true,
}

export const Readonly = Template.bind({})

Readonly.args = {
    readonly: true,
    data,
}

export const Error = Template.bind({})

Error.args = {
    error: {
        code: '500',
        message: 'SERVER_ERROR',
    },
}
