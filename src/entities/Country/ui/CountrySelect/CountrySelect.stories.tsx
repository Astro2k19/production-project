import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CountrySelect as Select } from './CountrySelect'

export default {
  title: 'shared/CountrySelect',
  component: Select,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const CountrySelect = Template.bind({})

CountrySelect.args = {}
