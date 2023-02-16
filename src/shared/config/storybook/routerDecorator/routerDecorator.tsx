import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const routerDecorator = (StoryComponent: Story) => {
  return (
      <BrowserRouter>
          <StoryComponent />
      </BrowserRouter>
  )
}