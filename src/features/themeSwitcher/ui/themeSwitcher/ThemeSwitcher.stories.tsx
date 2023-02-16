import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ThemeSwitcher>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const ThemeSwitcherComponent = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThemeSwitcherComponent.args = {}
