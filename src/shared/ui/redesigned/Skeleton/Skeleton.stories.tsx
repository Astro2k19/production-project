import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Skeleton } from './Skeleton'

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
    width: '100%',
    height: 80,
}

export const Circle = Template.bind({})
Circle.args = {
    width: 80,
    height: 80,
    borderRadius: '50%',
}
