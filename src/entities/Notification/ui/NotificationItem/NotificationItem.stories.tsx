import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import { notification } from '../../mocks/data'

export default {
  title: 'shared/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})

Normal.args = {
  item: notification
}
