import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Text } from '../Text'

import { Card as CardComponent } from './Card'

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
