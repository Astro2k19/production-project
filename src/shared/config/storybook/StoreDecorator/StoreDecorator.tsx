import { type DecoratorFn, type Story } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { StoreProvider } from 'app/providers/storeProvider'

export const StoreDecorator = (initialState?: DeepPartial<StoreSchema>): DecoratorFn => (StoryComponent: Story) => {
  return (
      <StoreProvider initialState={initialState as StoreSchema}>
          <StoryComponent />
      </StoreProvider>
  )
}
