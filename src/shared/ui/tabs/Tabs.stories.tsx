import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Tabs } from './Tabs'

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})

Normal.args = {
  value: 'first',
  tabs: [
    {
      value: 'first',
      label: 'First'
    },
    {
      value: 'second',
      label: 'Second'
    },
    {
      value: 'third',
      label: 'Third'
    },
    {
      value: 'fourth',
      label: 'Fourth'
    }
  ]
}
