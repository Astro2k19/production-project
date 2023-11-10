import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { AppLink } from './AppLink'

export default {
    title: 'shared/redesigned/AppImage',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />

export const Primary = Template.bind({})

Primary.args = {
    children: 'Test link',
    variant: 'primary',
}

export const Red = Template.bind({})

Red.args = {
    children: 'Test link',
    variant: 'red',
}
