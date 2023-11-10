import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

export default {
    title: 'shared/redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    children: 'Test button',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Test button',
    variant: 'clear',
}

export const Outline = Template.bind({})
Clear.args = {
    children: 'Test button',
    variant: 'outline',
}
