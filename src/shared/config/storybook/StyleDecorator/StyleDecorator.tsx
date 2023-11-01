import { type DecoratorFn, type Story } from '@storybook/react'

import '@/app/styles/index.scss'

export const StyleDecorator: DecoratorFn = (StoryComponent: Story) => {
    return (
        <div style={{ padding: '15px', height: '100%' }}>
            <StoryComponent />
        </div>
    )
}
