import { type DecoratorFn, type Story } from '@storybook/react'

import { type StoreSchema } from '@/app/providers/storeProvider'
import { StoreProvider } from '@/app/providers/storeProvider'

import { articlesPageReducer } from '@/pages/Articles/testing'

import { addCommentFormReducer } from '@/features/AddCommentForm/testing'
import { authReducer } from '@/features/Auth/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'

import { type ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: authReducer,
    profile: profileReducer,
    addCommentForm: addCommentFormReducer,
    articlesPageList: articlesPageReducer,
}

export const StoreDecorator =
    (
        initialState?: DeepPartial<StoreSchema>,
        asyncReducers?: ReducersList,
    ): DecoratorFn =>
    (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={initialState as StoreSchema}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
    }
