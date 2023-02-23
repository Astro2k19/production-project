import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { PageLoader } from './PageLoader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PageLoader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader/>

export const PageLoaderComponent = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageLoaderComponent.args = {}
