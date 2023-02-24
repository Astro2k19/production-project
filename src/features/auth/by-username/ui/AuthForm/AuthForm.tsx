import cls from './AuthForm.module.scss'
import { classNames } from 'shared/lib'
import { type FC, type FormEvent, useState } from 'react'
import { Button, ButtonVariants, Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState'
import { authActions } from '../../model/slice/authByUsernameSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface AuthFormProps {
  className?: string
}

export const AuthForm: FC = ({ className }: AuthFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error } = useSelector(getAuthState)

  const setUsername = (value: string) => {
    dispatch(authActions.setUsername(value))
  }

  const setPassword = (value: string) => {
    dispatch(authActions.setPassword(value))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('submit')
    dispatch(loginByUsername({ username, password }))
  }

  return (
      <form className={classNames([cls.authForm, className])} onSubmit={onSubmit} >
          {error && <p>{error}</p>}
          <Input type='text' onChange={setUsername} value={username} placeholder={'Username'} autoFocus />
          <Input type='text' onChange={setPassword} value={password} placeholder={'Password'} />
          <Button type='submit' className={cls.button} variant={ButtonVariants.BACKGROUND_INVERTED} onClick={onSubmit}>{t('Log In')}</Button>
      </form>
  )
}
