import React, { type InputHTMLAttributes, ReactNode, memo } from 'react'

import { classNames } from '@/shared/lib'
import { type Mods } from '@/shared/lib/classNames/classNames'

import { HStack } from '../Stack'
import { Text } from '../Text'
import cls from './Input.module.scss'

type InputOmittedAttributes = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'size'
>

type InputSizes = 'S' | 'M' | 'L'

interface InputProps extends InputOmittedAttributes {
    className?: string
    onChange?: (value: string) => void
    value?: string | number
    addonLeft?: ReactNode
    addonRight?: ReactNode
    label?: string
    size?: InputSizes
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        value,
        type = 'text',
        placeholder,
        autoFocus = false,
        addonLeft,
        addonRight,
        readOnly = false,
        label,
        size = 'M',
        ...others
    } = props

    const onChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        onChange?.(event.target.value)
    }

    const mods: Mods = {
        [cls.withLeftAddon]: Boolean(addonLeft),
        [cls.withRightAddon]: Boolean(addonRight),
        [cls.readOnly]: readOnly,
    }

    const input = (
        <div
            className={classNames(
                [cls.inputWrapper, cls[size], className],
                mods,
            )}
        >
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            <input
                {...others}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                className={cls.input}
                autoFocus={autoFocus}
                readOnly={readOnly}
            />
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </div>
    )

    if (label) {
        return (
            <HStack
                gap={'8'}
                alignItems={'center'}
            >
                <Text
                    text={label}
                    className={cls.label}
                />
                {input}
            </HStack>
        )
    }

    return input
})
