import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type AddCommentFormSchema } from '../types/addCommentForm'
import {buildSlice} from "@/shared/lib/store/buildSlice";

const initialState: AddCommentFormSchema = {
  error: undefined,
  isLoading: false,
  text: ''
}

export const addCommentFormSlice = buildSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

export const { useActions: useAddCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
