import cls from './AuthForm.module.scss'
import { classNames } from 'shared/lib'
import { type FC, type FormEvent } from 'react'
import { Button, ButtonVariants, Input, Text, TextVariants } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState'
import { authActions } from '../../model/slice/loginByUsernameSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface AuthFormProps {
  className?: string
}

export const AuthForm: FC = ({ className }: AuthFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getAuthState)

  const setUsername = (value: string): void => {
    dispatch(authActions.setUsername(value))
  }

  const setPassword = (value: string): void => {
    dispatch(authActions.setPassword(value))
  }

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault()
    console.log('submit')
    dispatch(loginByUsername({ username, password }))
  }

  return (
      <form className={classNames([cls.authForm, className])} onSubmit={onSubmit} >
          <Text title='Authorization form' className={cls.title} />
          {/* handle error with status codes */}
          {error && <Text text={error} variant={TextVariants.ERROR} />}
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
  )
}
