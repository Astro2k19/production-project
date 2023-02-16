import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button, ButtonVariants } from './Button'
import { Theme } from 'shared/lib'
import { withThemes } from 'storybook-addon-themes/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Test'
}

// Primary.decorators = [themeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: 'Test',
  variant: ButtonVariants.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Test',
  variant: ButtonVariants.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Test',
  variant: ButtonVariants.OUTLINE
}

OutlineDark.story = {
  decorators: [withThemes],
  parameters: {
    themes: {
      default: 'Dark'
    }
  }
}
