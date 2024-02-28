import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { withRouter } from 'storybook-addon-react-router-v6'

import { profile as data } from '@/entities/Profile/testing'

import { StoreDecorator } from '@/shared/config/storybook'

import ProfilePage from './Profile'

export default {
    title: 'pages/Profile',
    component: ProfilePage,
    decorators: [
        withMock,
        withRouter,
        StoreDecorator({
            profile: {
                data,
                formData: data,
            },
            user: {
                authData: {
                    id: '2',
                },
            },
        }),
    ],
    parameters: {
        reactRouter: {
            routePath: '/profile/:id',
            routeParams: { id: '2' },
        },
        mockData: [
            {
                url: `${__API_URL__}/profiles-rating?profileId=2&userId=2`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 5,
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Profile = Template.bind({})
