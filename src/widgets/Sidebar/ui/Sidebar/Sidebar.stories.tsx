import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const AuthUser = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AuthUser.args = {}
AuthUser.decorators = [StoreDecorator({
  user: {
    authData: {}
  }
})]

export const NoAuthUser = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoAuthUser.args = {}
NoAuthUser.decorators = [StoreDecorator({
  user: {}
})]
