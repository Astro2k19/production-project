import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { PageErrorTest } from './PageErrorTest'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/PageError',
  component: PageErrorTest,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PageErrorTest>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageErrorTest> = (args) => <PageErrorTest/>

export const PageError = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageError.args = {}
