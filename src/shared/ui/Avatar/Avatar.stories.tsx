import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Avatar } from './Avatar'

import img from '@/shared/assets/images/tests/avatar.jpg'

export default {
  title: 'shared/Avatar',
  component: Avatar,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const small = Template.bind({})

small.args = {
  src: img,
  size: 50
}

export const medium = Template.bind({})

medium.args = {
  src: img
}
