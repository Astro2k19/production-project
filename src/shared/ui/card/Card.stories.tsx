import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Card as CardComponent } from './Card'
import { Text } from 'shared/ui'

export default {
  title: 'shared/Card',
  component: CardComponent,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CardComponent>

const Template: ComponentStory<typeof CardComponent> = (args) => <CardComponent {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: <Text title={'Hello world!'} text={'Lorem ipsum, Lorem ipsum'} />
}
