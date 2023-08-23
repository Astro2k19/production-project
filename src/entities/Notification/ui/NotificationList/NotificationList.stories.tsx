import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationList } from './NotificationList'
import withMock from 'storybook-addon-mock'
import { mockResponse } from '@/entities/Notification/mocks/data'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'shared/Notification/NotificationList',
  component: NotificationList,
  decorators: [withMock, StoreDecorator({})],
  parameters: {
    mockData: [
      mockResponse
    ]
  }
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
export const withLoading = Template.bind({})

withLoading.parameters = {
  mockData: [
    { ...mockResponse, delay: 2000 }
  ]
}
