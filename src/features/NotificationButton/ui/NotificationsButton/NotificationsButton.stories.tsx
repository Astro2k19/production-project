import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { NotificationsButton } from './NotificationsButton'

import { mockResponse } from '@/entities/Notification'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/NotificationsButton',
  component: NotificationsButton,
  decorators: [withMock, StoreDecorator({})],
  parameters: {
    mockData: [
      { ...mockResponse, delay: 2000 }
    ]
  }
} as ComponentMeta<typeof NotificationsButton>

const Template: ComponentStory<typeof NotificationsButton> = (args) => <NotificationsButton {...args} />

export const Normal = Template.bind({})
