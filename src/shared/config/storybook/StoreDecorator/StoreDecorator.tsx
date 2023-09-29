import { type DecoratorFn, type Story } from '@storybook/react'

import { type StoreSchema } from '@/app/providers/storeProvider'
import { StoreProvider } from '@/app/providers/storeProvider'
import { addCommentFormReducer } from '@/features/AddCommentForm/testing'
import { authReducer } from '@/features/Auth/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'
import { articleSingleCommentsReducer } from '@/pages/ArticleSingle/testing'
import { articlesPageReducer } from '@/pages/Articles/testing'
import { type ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: authReducer,
  profile: profileReducer,
  addCommentForm: addCommentFormReducer,
  articleSingleComments: articleSingleCommentsReducer,
  articlesPageList: articlesPageReducer
}

export const StoreDecorator = (
  initialState?: DeepPartial<StoreSchema>,
  asyncReducers?: ReducersList
): DecoratorFn => (StoryComponent: Story) => {
  return (
      <StoreProvider initialState={initialState as StoreSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
          <StoryComponent />
      </StoreProvider>
  )
}
