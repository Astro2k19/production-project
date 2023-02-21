import { type DecoratorFn, type Story } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeProvider } from 'app/providers/themeProvider'
import { Theme } from 'shared/lib'

export const styleDecorator: DecoratorFn = (StoryComponent: Story) => {
  return (
      <ThemeProvider initialTheme={Theme.LIGHT}>
          <StoryComponent />
      </ThemeProvider>
  )
}
