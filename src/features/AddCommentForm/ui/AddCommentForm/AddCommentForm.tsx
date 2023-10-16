import { memo, type SyntheticEvent, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useGetAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormReducer, useAddCommentFormActions } from '../../model/slice/addCommentFormSlice'

import { classNames } from '@/shared/lib'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation()
  const text = useGetAddCommentFormText()
  const { setText } = useAddCommentFormActions()

  const onChangeComment = useCallback((text: string) => {
    setText(text)
  }, [setText])

  const onSubmitForm = useCallback((event: SyntheticEvent) => {
    event.preventDefault()
    onSendComment(text ?? '')
    setText('')
  }, [onSendComment, setText, text])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <form
              className={classNames([cls.addComponentForm, className])}
              onSubmit={onSubmitForm}
              data-testid={'AddCommentForm'}
          >
              <Input
                    className={cls.input}
                    placeholder={t('Enter comment')}
                    onChange={onChangeComment}
                    value={text}
                    data-testid={'AddCommentForm.Input'}
                />
              <Button
                  type='submit'
                  variant={ButtonVariants.OUTLINE}
                  data-testid={'AddCommentForm.Button'}
              >
                  {t('Send')}</Button>
          </form>
      </DynamicModuleLoader>
  )
})

export default AddCommentForm
