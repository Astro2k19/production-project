import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotFoundPage } from './NotFound'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'pages/NotFound',
  component: NotFoundPage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const NotFound = Template.bind({})

NotFound.decorators = [
  StoreDecorator({})
]
