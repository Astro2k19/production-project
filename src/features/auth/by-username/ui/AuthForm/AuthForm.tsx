import cls from './AuthForm.module.scss'
import { classNames } from 'shared/lib'
import { type FC, useState } from 'react'
import { Button, ButtonVariants, Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface AuthFormProps {
  className?: string
}

export const AuthForm: FC = ({ className }: AuthFormProps) => {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
      <form className={classNames([cls.authForm, className])}>
          <Input type='text' onChange={setUsername} value={username} placeholder={'Username'} />
          <Input type='text' onChange={setPassword} value={password} placeholder={'Password'} />
          <Button className={cls.button} variant={ButtonVariants.BACKGROUND_INVERTED}>{t('Log In')}</Button>
      </form>
  )
}
