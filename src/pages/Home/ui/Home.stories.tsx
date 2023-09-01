import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import HomePage from './Home'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/Home',
  component: HomePage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Home = Template.bind({})

Home.decorators = [
  StoreDecorator({})
]
