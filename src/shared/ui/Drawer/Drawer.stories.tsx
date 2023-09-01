import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Text } from '../Text'

import { Drawer } from './Drawer'

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

const content = (
    <div>
        <Text title={'Drag me:)'} text={'again!'} />
        <Text title={'Drag me:)'} text={'again!'} />
    </div>
)
export const Normal = Template.bind({})

Normal.args = {
  isOpen: true,
  children: content
}
