import { memo, useState } from 'react'
import cls from './Code.module.scss'
import { classNames } from '@/shared/lib'
import { Button, ButtonVariants } from '../Button'
import CopyIcon from '@/shared/assets/icons/copy_icon.svg'
import { useTranslation } from 'react-i18next'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const { t } = useTranslation()
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = () => {
    const type = 'text/plain'
    const blob = new Blob([text], { type })
    const data = [new ClipboardItem({ [type]: blob })]
    window.navigator.clipboard.write(data).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 700)
    })
  }

  if (!text) {
    return null
  }

  return (
      <pre className={classNames([cls.code, className])}>
          <Button className={cls.copyBtn} variant={ButtonVariants.CLEAR} onClick={onCopy}>
              <CopyIcon className={cls.copyIcon} />
              {isCopied && <span>{t('Copied!')}</span>}
          </Button>
          <code>
              {text}
          </code>
      </pre>
  )
})
