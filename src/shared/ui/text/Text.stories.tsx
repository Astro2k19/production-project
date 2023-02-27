import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Text, TextVariants } from './Text'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
}

export const onlyTitle = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyTitle.args = {
  title: 'Title lorem ipsum'
}

export const onlyText = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onlyText.args = {
  text: 'Title lorem ipsum'
}

export const Error = Template.bind({})

Error.args = {
  title: 'Title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  variant: TextVariants.ERROR
}
