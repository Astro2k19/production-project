import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { AppLogo } from './AppLogo'

export default {
    title: 'shared/AppLogo',
    component: AppLogo,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLogo>

const Template: ComponentStory<typeof AppLogo> = args => <AppLogo {...args} />

export const Normal = Template.bind({})