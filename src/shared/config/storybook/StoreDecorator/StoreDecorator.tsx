import { type DecoratorFn, type Story } from '@storybook/react'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { StoreProvider } from 'app/providers/storeProvider'
import { authReducer } from 'features/auth/by-username/model/slice/loginByUsernameSlice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: authReducer,
  profile: profileReducer
}

export const StoreDecorator = (
  initialState?: DeepPartial<StoreSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
): DecoratorFn => (StoryComponent: Story) => {
  return (
      <StoreProvider initialState={initialState as StoreSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
          <StoryComponent />
      </StoreProvider>
  )
}
