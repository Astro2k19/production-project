import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Select as SelectComponent } from './Select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Select',
  component: SelectComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof SelectComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectComponent> = (args) => <SelectComponent {...args} />

export const Select = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  label: 'Label',
  options: [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' }
  ]
}
