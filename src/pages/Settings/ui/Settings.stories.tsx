import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import SettingsPage from './Settings'

export default {
    title: 'pages/Settings',
    component: SettingsPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), withRouter],
} as ComponentMeta<typeof SettingsPage>

const Template: ComponentStory<typeof SettingsPage> = () => <SettingsPage />

export const Home = Template.bind({})
