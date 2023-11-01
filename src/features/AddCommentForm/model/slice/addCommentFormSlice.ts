import { type PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@/shared/lib/store/buildSlice'

import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
    error: undefined,
    isLoading: false,
    text: '',
}

export const addCommentFormSlice = buildSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
})

export const {
    useActions: useAddCommentFormActions,
    actions: addCommentFormActions,
} = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
