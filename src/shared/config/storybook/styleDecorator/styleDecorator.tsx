import { type Story } from '@storybook/react'
import 'app/styles/index.scss'
import { type ReactElement } from 'react'

export const styleDecorator = (StoryComponent: Story): ReactElement => <StoryComponent />
