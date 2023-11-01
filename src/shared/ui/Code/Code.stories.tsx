import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Code as CodeComponent } from './Code'

export default {
    title: 'shared/Code',
    component: CodeComponent,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CodeComponent>

const Template: ComponentStory<typeof CodeComponent> = args => (
    <CodeComponent {...args} />
)

export const Code = Template.bind({})
Code.args = {
    text: 'test',
}
