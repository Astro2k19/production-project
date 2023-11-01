import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import AboutPage from './About'

export default {
    title: 'pages/About',
    component: AboutPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const About = Template.bind({})

About.decorators = [StoreDecorator({})]
