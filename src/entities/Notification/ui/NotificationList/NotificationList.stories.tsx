import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { mockResponse } from '../../mocks/data'
import { NotificationList } from './NotificationList'

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [withMock, StoreDecorator({})],
    parameters: {
        mockData: [mockResponse],
    },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = args => (
    <NotificationList {...args} />
)

export const Normal = Template.bind({})
export const withLoading = Template.bind({})

withLoading.parameters = {
    mockData: [{ ...mockResponse, delay: 2000 }],
}
