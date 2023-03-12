import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CountrySelect as Select } from './CountrySelect'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/CountrySelect',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const CountrySelect = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CountrySelect.args = {}
