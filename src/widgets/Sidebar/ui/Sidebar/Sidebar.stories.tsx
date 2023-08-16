import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const AuthUser = Template.bind({})

AuthUser.args = {}
AuthUser.decorators = [StoreDecorator({
  user: {
    authData: {}
  }
})]

export const NoAuthUser = Template.bind({})

NoAuthUser.args = {}
NoAuthUser.decorators = [StoreDecorator({
  user: {}
})]
