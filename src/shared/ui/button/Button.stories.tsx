import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button, ButtonSizes, ButtonVariants } from './Button'

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

export const Clear = Template.bind({})
Clear.args = {
  children: 'Test',
  variant: ButtonVariants.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Test',
  variant: ButtonVariants.CLEAR_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Test',
  variant: ButtonVariants.OUTLINE
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Test',
  size: ButtonSizes.L,
  variant: ButtonVariants.OUTLINE
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Test',
  size: ButtonSizes.XL,
  variant: ButtonVariants.OUTLINE
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Test',
  variant: ButtonVariants.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Test',
  variant: ButtonVariants.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  square: true,
  variant: ButtonVariants.BACKGROUND_INVERTED
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  square: true,
  size: ButtonSizes.L,
  variant: ButtonVariants.BACKGROUND_INVERTED
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  square: true,
  size: ButtonSizes.XL,
  variant: ButtonVariants.BACKGROUND_INVERTED
}
