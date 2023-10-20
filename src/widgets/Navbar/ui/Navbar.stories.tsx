import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import avatar from '@/shared/assets/images/tests/avatar.jpg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { Navbar } from './Navbar'

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const Unauthorized = Template.bind({})

Unauthorized.args = {}
Unauthorized.decorators = [StoreDecorator({})]

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
