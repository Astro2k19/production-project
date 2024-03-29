import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import avatar from '@/shared/assets/images/tests/avatar.jpg'
import { StoreDecorator } from '@/shared/config/storybook'

import { Navbar } from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), withRouter],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const Unauthorized = Template.bind({})

Unauthorized.args = {}

export const Authorized = Template.bind({})

Authorized.args = {}
Authorized.decorators = [
    StoreDecorator({
        user: {
            authData: {
                avatar,
            },
        },
    }),
]
