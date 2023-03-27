import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Text, TextSize, TextVariants } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
}

export const SizeL = Template.bind({})

SizeL.args = {
  title: 'Title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  size: TextSize.L
}

export const SizeXL = Template.bind({})

SizeXL.args = {
  title: 'Title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  size: TextSize.XL
}

export const onlyTitle = Template.bind({})

onlyTitle.args = {
  title: 'Title lorem ipsum'
}

export const onlyText = Template.bind({})

onlyText.args = {
  text: 'Title lorem ipsum'
}

export const Error = Template.bind({})

Error.args = {
  title: 'Title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  variant: TextVariants.ERROR
}
