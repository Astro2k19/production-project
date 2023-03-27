import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'widgets/Navbar',
  component: Navbar,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Unauthorized = Template.bind({})

Unauthorized.args = {}
Unauthorized.decorators = [StoreDecorator({})]

export const Authorized = Template.bind({})

Authorized.args = {}
Authorized.decorators = [StoreDecorator({
  user: {
    authData: {}
  }
})]
