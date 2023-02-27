import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Unauthorized = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unauthorized.args = {}
Unauthorized.decorators = [storeDecorator({})]

export const Authorized = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Authorized.args = {}
Authorized.decorators = [storeDecorator({
  user: {
    authData: {}
  }
})]
