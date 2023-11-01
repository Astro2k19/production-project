import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { PageErrorTest } from './PageErrorTest'

export default {
    title: 'widgets/PageError',
    component: PageErrorTest,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageErrorTest>

const Template: ComponentStory<typeof PageErrorTest> = args => <PageErrorTest />

export const PageError = Template.bind({})

PageError.args = {}
