import { memo } from 'react'

import { classNames } from '@/shared/lib'

import cls from './Text.module.scss'

type TextVariants = 'primary' | 'error' | 'accent'

type TextAligns = 'left' | 'right' | 'center'

type TextSize = 'S' | 'M' | 'L' | 'XL'

type TitleTextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TextType = 'p'

interface TextProps {
    className?: string
    title?: string
    TitleTag?: TitleTextType
    TextTag?: TextType
    text?: string
    variant?: TextVariants
    align?: TextAligns
    size?: TextSize
    'data-testid'?: string
}

const mappedSize: Record<TextSize, string> = {
    S: cls.size_s,
    M: cls.size_m,
    L: cls.size_l,
    XL: cls.size_xl,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'M',
        TitleTag = 'h3',
        TextTag = 'p',
        'data-testid': dataTestId = 'Text',
    } = props

    return (
        <div
            className={classNames([
                cls.text,
                className,
                cls[variant],
                cls[align],
                mappedSize[size],
            ])}
        >
            {title && (
                <TitleTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </TitleTag>
            )}
            {text && (
                <TextTag
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.textContent}
                >
                    {text}
                </TextTag>
            )}
        </div>
    )
})
