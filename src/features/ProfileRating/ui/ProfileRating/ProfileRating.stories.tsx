import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import ProfileRating from './ProfileRating'

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {
                    id: '2',
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API_URL__}/profiles-rating?profileId=2&userId=2`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 2,
                    },
                ],
            },
        ],
    },
    args: {
        profileId: '2',
        withPortal: false,
    },
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = args => (
    <ProfileRating {...args} />
)

export const Normal = Template.bind({})
