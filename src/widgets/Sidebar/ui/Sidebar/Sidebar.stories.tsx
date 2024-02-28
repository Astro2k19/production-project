import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import { Sidebar } from './Sidebar'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />

export const AuthUser = Template.bind({})

AuthUser.args = {}
AuthUser.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
]

export const NoAuthUser = Template.bind({})

NoAuthUser.args = {}
NoAuthUser.decorators = [
    StoreDecorator({
        user: {},
    }),
]
