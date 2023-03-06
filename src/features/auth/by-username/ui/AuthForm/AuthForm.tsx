import cls from './AuthForm.module.scss'
import { classNames } from 'shared/lib'
import { type FC, type FormEvent, useCallback } from 'react'
import { Button, ButtonVariants, Input, Text, TextVariants } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
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

export interface AuthFormProps {
  className?: string
  onSuccess: () => void
}

export enum AuthFormErrors {
  ERR_NETWORK = 'Oops! Something went wrong. Please, try again!',
  SERVER_ERROR = 'Oops! Something went wrong. Please, try again!',
  ERR_BAD_REQUEST = 'Email or password is incorrect!'
}

const initialReducers: ReducersList = {
  loginForm: authReducer
}

const AuthForm: FC = ({ className, onSuccess }: AuthFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getAuthUsername)
  const password = useSelector(getAuthPassword)
  const isLoading = useSelector(getAuthLoading)
  const error = useSelector(getAuthError)

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
                type='text'
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