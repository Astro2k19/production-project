import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import ForbiddenPage from './ForbiddenPage'

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withRouter],
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />

export const Forbidden = Template.bind({})

Forbidden.decorators = [StoreDecorator({})]
