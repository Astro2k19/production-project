import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

const people = [
  { id: 1, value: 'Durward Reynolds', label: 'Durward Reynolds', disabled: false },
  { id: 2, value: 'Kenton Towne', label: 'Durward Reynolds', disabled: false },
  { id: 3, value: 'Therese Wunsch', label: 'Durward Reynolds', disabled: false },
  { id: 4, value: 'Benedict Kessler', label: 'Durward Reynolds', disabled: true },
  { id: 5, value: 'Katelyn Rohan', label: 'Durward Reynolds', disabled: false }
]

export const Normal = Template.bind({})

Normal.args = {
  items: people,
  label: 'People',
  defaultValue: 'Select person',
  onChange: (value) => value
}

export const Disabled = Template.bind({})

Disabled.args = {
  items: people,
  label: 'People',
  defaultValue: 'Select person',
  onChange: (value) => value,
  readonly: true
}
