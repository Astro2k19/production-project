import { type DecoratorFn, type Story } from '@storybook/react'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { StoreProvider } from 'app/providers/storeProvider'
import { type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'

// we use such path for imports because these are async reducers, and they can't be in the public api
import { authReducer } from 'features/auth/by-username/model/slice/loginByUsernameSlice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice'
import { articleSingleCommentsReducer } from 'pages/ArticleSingle/model/slice/articleSingleCommentsSlice'

const defaultAsyncReducers: ReducersList = {
  loginForm: authReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleSinglePageComments: articleSingleCommentsReducer
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
