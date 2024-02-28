import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { UserRoles } from '@/entities/User'

import { StoreDecorator } from '@/shared/config/storybook'

import AdminPanelPage from './AdminPanel'

export default {
    title: 'pages/AdminPanel',
    component: AdminPanelPage,
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    roles: [UserRoles.ADMIN],
                },
            },
        }),
        withRouter,
    ],
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />

export const AdminPanel = Template.bind({})
