import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import AboutPage from './About'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/About',
  component: AboutPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AboutPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const About = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
About.args = {}
