import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Button, ButtonSizes, ButtonVariants } from './Button'

export default {
  title: 'shared/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

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
