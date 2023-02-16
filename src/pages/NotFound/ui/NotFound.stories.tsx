import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotFound } from './NotFound'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/NotFound',
  component: NotFound,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotFound>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />

export const NotFoundPage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotFoundPage.args = {}
