import { type DecoratorFn, type Story } from '@storybook/react'
import 'app/styles/index.scss'

export const styleDecorator: DecoratorFn = (StoryComponent: Story) => <StoryComponent />
