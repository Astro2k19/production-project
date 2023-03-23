import cls from './AuthForm.module.scss'
import { classNames } from 'shared/lib'
import { type FC, type FormEvent, useCallback } from 'react'
import { Button, ButtonVariants, Input, Text, TextVariants } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { authActions, authReducer } from '../../model/slice/loginByUsernameSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getAuthLoading } from '../../model/selectors/getAuthLoading/getAuthLoading'
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword'
import { getAuthError } from '../../model/selectors/getAuthError/getAuthError'
import { getAuthUsername } from '../../model/selectors/getAuthUsername/getAuthUsername'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { AuthFormErrors } from '../../model/types/loginSchema'

export interface AuthFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: authReducer
}

const AuthForm: FC<AuthFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useAppSelector(getAuthUsername)
  const password = useAppSelector(getAuthPassword)
  const isLoading = useAppSelector(getAuthLoading)
  const error = useAppSelector(getAuthError)

  const setUsername = useCallback(
    (value: string): void => {
      dispatch(authActions.setUsername(value))
    },
    [dispatch]
  )

  const setPassword = useCallback(
    (value: string): void => {
      dispatch(authActions.setPassword(value))
    },
    [dispatch]
  )

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const action = await dispatch(loginByUsername({ username, password }))
    if (action.meta.requestStatus === 'fulfilled') {
      onSuccess()
    }
  }

  return (
      <DynamicModuleLoader
          removeAfterUnmount
          reducers={initialReducers}
      >
          <form className={classNames([cls.authForm, className])} onSubmit={onSubmit}>
              <Text title='Authorization form' className={cls.title} />
              {error && <Text text={t(AuthFormErrors[error] ?? AuthFormErrors.SERVER_ERROR)} variant={TextVariants.ERROR} />}
              <Input
                type='text'
                onChange={setUsername}
                value={username}
                placeholder={'Username'}
                autoFocus
                className={cls.input}
              />
              <Input
                type='password'
                onChange={setPassword}
                value={password}
                placeholder={'Password'}
              />
              <Button
                  type='submit'
                  className={cls.button}
                  variant={ButtonVariants.OUTLINE}
                  onClick={onSubmit}
                  disabled={isLoading}
        >
                  {t('Log In')}
              </Button>
          </form>
      </DynamicModuleLoader>
  )
}

export default AuthForm
