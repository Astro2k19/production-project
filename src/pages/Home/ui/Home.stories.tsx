import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import Home from './Home'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/Home',
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Home>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const HomePage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HomePage.args = {}
