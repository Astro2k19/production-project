import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { type FC } from 'react'

export const routerDecorator: FC = (StoryComponent: Story) => {
  return (
      <BrowserRouter>
          <StoryComponent />
      </BrowserRouter>
  )
}
