import { type DecoratorFn, type Story } from '@storybook/react'
import { Suspense } from 'react'

import '@/app/styles/index.scss'

import { Loader } from '@/shared/ui/Loader'

export const SuspenseDecorator: DecoratorFn = (StoryComponent: Story) => {
    return (
        <Suspense fallback={<Loader />}>
            <StoryComponent />
        </Suspense>
    )
}
