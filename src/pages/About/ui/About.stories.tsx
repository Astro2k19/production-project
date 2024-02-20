import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

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

About.decorators = [StoreDecorator({}), withRouter]
