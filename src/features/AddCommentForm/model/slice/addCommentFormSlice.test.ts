import { type AddCommentFormSchema } from '../types/addCommentForm'

import { useAddCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFormSlice', () => {
  const state: DeepPartial<AddCommentFormSchema> = {
    text: ''
  }

  test('setText', () => {
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        useAddCommentFormActions().setText('New comment!')
      )
    ).toEqual({
      text: 'New comment!'
    })
  })
})
