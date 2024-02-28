import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import { NotFoundPage } from './NotFound'

export default {
    title: 'pages/NotFound',
    component: NotFoundPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = args => (
    <NotFoundPage {...args} />
)

export const NotFound = Template.bind({})

NotFound.decorators = [StoreDecorator({})]
