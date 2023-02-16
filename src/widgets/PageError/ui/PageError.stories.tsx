import React, { useEffect } from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

// with ErrorBoundary decorator
const StoryPageError = () => {
  useEffect(() => {
    throw new Error('Story error')
  })

  return <div></div>
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'widgets/PageError',
  component: StoryPageError,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof StoryPageError>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StoryPageError> = (args) => <StoryPageError/>

export const PageErrorComponent = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageErrorComponent.args = {}
