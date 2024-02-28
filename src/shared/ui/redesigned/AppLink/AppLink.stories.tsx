import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { AppLink } from './AppLink'

export default {
    title: 'shared/AppImage',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
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
