import { lazy, type FC } from 'react'
import { type AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise((resolve) => {
  setTimeout(() => { // @ts-expect-error: TS2345
    resolve(import('./AddCommentForm'))
  }, 1500)
}))
