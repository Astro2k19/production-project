import { type DecoratorFn, type Story } from '@storybook/react'
import { type StoreSchema } from '@/app/providers/storeProvider/config/StoreSchema'
import { StoreProvider } from '@/app/providers/storeProvider'
import { type ReducersList } from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader'

// we use such path for imports because these are async reducers, and they can't be in the public api
// TODO: FIX
// eslint-disable-next-line authoring-project-plugin/public-api-import-checker
import { authReducer } from '@/features/auth/by-username/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { articleSingleCommentsReducer } from '@/pages/ArticleSingle/testing'
import { articlesPageReducer } from '@/pages/Articles/testing'

const defaultAsyncReducers: ReducersList = {
  loginForm: authReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
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
