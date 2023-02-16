import { ErrorBoundary } from 'react-error-boundary'
import { PageError } from 'widgets/PageError'
import React from 'react'
import { type Story } from '@storybook/react'

export const errorDecorator = (StoryComponent: Story) => {
  return (
      <ErrorBoundary FallbackComponent={PageError}>
          <StoryComponent />
      </ErrorBoundary>
  )
}
