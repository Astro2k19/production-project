import { type DecoratorFn, type Story } from '@storybook/react'
import '@/app/styles/index.scss'
import { Suspense } from 'react'
import { Loader } from '@/shared/ui'

export const SuspenseDecorator: DecoratorFn = (StoryComponent: Story) => {
  return (
      <Suspense fallback={<Loader/>}>
          <StoryComponent />
      </Suspense>
  )
}
