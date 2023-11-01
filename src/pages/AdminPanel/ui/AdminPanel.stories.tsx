import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { UserRoles } from '@/entities/User'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import AdminPanelPage from './AdminPanel'

export default {
    title: 'pages/AdminPanel',
    component: AdminPanelPage,
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />

export const AdminPanel = Template.bind({})

AdminPanel.decorators = [
    StoreDecorator({
        user: {
            authData: {
                roles: [UserRoles.ADMIN],
            },
        },
    }),
]
