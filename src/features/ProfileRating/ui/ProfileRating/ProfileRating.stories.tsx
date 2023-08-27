import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ProfileRating from './ProfileRating'
import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  decorators: [withMock, StoreDecorator({
    user: {
      authData: {
        id: '3'
      }
    }
  })],
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/profile-rating?userid=1&profileId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 3
          }
        ]
      }
    ]
  }
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />

export const Normal = Template.bind({})

Normal.args = {
  profileId: '1',
  withPortal: false
}
