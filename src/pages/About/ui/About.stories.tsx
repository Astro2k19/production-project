import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import AboutPage from './About'

export default {
  title: 'pages/About',
  component: AboutPage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const About = Template.bind({})

About.args = {}
