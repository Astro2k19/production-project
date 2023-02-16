import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import About from './About'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/About',
  component: About,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof About>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof About> = (args) => <About {...args} />

export const AboutPage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutPage.args = {}
