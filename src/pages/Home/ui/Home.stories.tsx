import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import HomePage from './Home'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/Home',
  component: HomePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof HomePage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />

export const Home = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Home.args = {}
