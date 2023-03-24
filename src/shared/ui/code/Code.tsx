import { type FC } from 'react'
import cls from './Code.module.scss'
import { classNames } from 'shared/lib'
import { Button, ButtonVariants } from 'shared/ui/button/Button'

interface CodeProps {
  className?: string
  text: string
}

export const Code: FC<CodeProps> = ({ className, text }) => {
  return (
      <pre className={classNames([cls.code, className])}>
          <Button className={cls.copyBtn} variant={ButtonVariants.OUTLINE}>Copy</Button>
          <code>
              {text}
          </code>
      </pre>
  )
}
