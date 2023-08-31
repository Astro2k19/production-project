import { memo, type SyntheticEvent, useCallback } from 'react'
import cls from './AddCommentForm.module.scss'
import { classNames } from '@/shared/lib'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { Input } from '@/shared/ui/Input'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation()
  const text = useAppSelector(getAddCommentFormText)
  const dispatch = useAppDispatch()

  const onChangeComment = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text))
  }, [dispatch])

  const onSubmitForm = useCallback((event: SyntheticEvent) => {
    event.preventDefault()
    onSendComment(text ?? '')
    dispatch(addCommentFormActions.setText(''))
  }, [dispatch, onSendComment, text])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <form className={classNames([cls.addComponentForm, className])} onSubmit={onSubmitForm}>
              <Input
                      className={cls.input}
                      placeholder={t('Enter comment')}
                      onChange={onChangeComment}
                      value={text}
                  />
              <Button type='submit' variant={ButtonVariants.OUTLINE}>{t('Send')}</Button>
          </form>
      </DynamicModuleLoader>
  )
})

export default AddCommentForm
