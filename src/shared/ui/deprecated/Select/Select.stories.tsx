import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Select as SelectComponent } from './Select'

export default {
    title: 'shared/Select',
    component: SelectComponent,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SelectComponent>

const Template: ComponentStory<typeof SelectComponent> = args => (
    <SelectComponent {...args} />
)

export const Normal = Template.bind({})

Normal.args = {
    label: 'Label',
    options: [
        { value: '1', label: 'one' },
        { value: '2', label: 'two' },
        { value: '3', label: 'three' },
    ],
}
