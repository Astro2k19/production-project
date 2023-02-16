import { ErrorBoundary } from 'react-error-boundary'
import { PageError } from 'widgets/PageError'
import React, { type FC } from 'react'
import { type Story } from '@storybook/react'

export const errorDecorator: FC = (StoryComponent: Story) => {
  return (
      <ErrorBoundary FallbackComponent={PageError}>
          <StoryComponent />
      </ErrorBoundary>
  )
}
