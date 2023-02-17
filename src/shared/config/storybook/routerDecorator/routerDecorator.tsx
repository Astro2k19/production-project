import { type DecoratorFn, type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const routerDecorator: DecoratorFn = (StoryComponent: Story) => {
  return (
      <BrowserRouter>
          <StoryComponent />
      </BrowserRouter>
  )
}
