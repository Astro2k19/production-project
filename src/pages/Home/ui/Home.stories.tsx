import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import HomePage from './Home'

export default {
    title: 'pages/Home',
    component: HomePage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), withRouter],
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Home = Template.bind({})
