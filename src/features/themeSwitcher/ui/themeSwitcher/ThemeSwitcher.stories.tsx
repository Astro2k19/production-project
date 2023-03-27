import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const ThemeSwitcherComponent = Template.bind({})

ThemeSwitcherComponent.args = {}
