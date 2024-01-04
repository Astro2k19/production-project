import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import SettingsPage from './Settings'

export default {
    title: 'pages/Settings',
    component: SettingsPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsPage>

const Template: ComponentStory<typeof SettingsPage> = () => <SettingsPage />

export const Home = Template.bind({})

Home.decorators = [StoreDecorator({})]
