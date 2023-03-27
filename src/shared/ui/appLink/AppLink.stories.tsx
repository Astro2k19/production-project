import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { AppLink, AppLinkVariants } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const AppLinkPrimary = Template.bind({})

AppLinkPrimary.args = {
  children: 'Test'
}

export const AppLinkInverted = Template.bind({})

AppLinkInverted.args = {
  children: 'Test',
  variant: AppLinkVariants.INVERTED
}
