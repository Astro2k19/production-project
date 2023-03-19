import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Avatar } from './Avatar'
import img from 'shared/assets/images/tests/avatar.jpg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const small = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
small.args = {
  src: img,
  size: 50
}

export const medium = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
medium.args = {
  src: img
}
