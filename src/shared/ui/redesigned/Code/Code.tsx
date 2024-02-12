import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import CopyIcon from '@/shared/assets/icons/Copy.svg'
import { classNames } from '@/shared/lib'

import { Icon } from '../Icon'
import cls from './Code.module.scss'

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

    return (
        <pre className={classNames([cls.code, className])}>
            <div className={cls.buttonWrapper}>
                <Icon
                    Svg={CopyIcon}
                    clickable
                    onClick={onCopy}
                />
                {isCopied && <span>{t('Copied!')}</span>}
            </div>
            <code>{text}</code>
        </pre>
    )
})
