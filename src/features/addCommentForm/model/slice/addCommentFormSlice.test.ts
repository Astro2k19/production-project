import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'
import { type AddCommentFormSchema } from '../types/addCommentForm'

describe('addCommentFormSlice', () => {
  const state: DeepPartial<AddCommentFormSchema> = {
    text: ''
  }

  test('setText', () => {
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText('New comment!')
      )
    ).toEqual({
      text: 'New comment!'
    })
  })
})
