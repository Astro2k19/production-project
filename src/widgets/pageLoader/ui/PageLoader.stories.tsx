import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { PageLoader } from './PageLoader'

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader/>

export const PageLoaderComponent = Template.bind({})

PageLoaderComponent.args = {}
