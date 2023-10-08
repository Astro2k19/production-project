import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'

import ProfilePage from './Profile'

import { profile as data } from '@/entities/Profile/testing'
import { mockArticleRatingResponse } from '@/entities/Rating/testing'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/Profile',
  component: ProfilePage,
  parameters: {
    reactRouter: {
      routePath: '/profile/:id',
      routeParams: { id: '1' }
    }
  },
  decorators: [
    StoreDecorator({
      profile: {
        data,
        formData: data
      },
      user: {
        authData: {
          id: '1'
        }
      }
    }), withMock
  ],
  mockData: [
    mockArticleRatingResponse
  ],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Profile = Template.bind({})
