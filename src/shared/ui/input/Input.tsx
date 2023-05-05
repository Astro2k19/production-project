import React, { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib'
import { type Mods } from 'shared/lib/classNames/classNames'

type InputOmittedAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends InputOmittedAttributes {
  className?: string
  onChange?: (value: string) => void
  value?: string | number
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    type = 'text',
    placeholder,
    autoFocus = false,
    readOnly = false,
    ...others
  } = props

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly
  }

  return (
      <div className={classNames([cls.inputWrapper, className], mods)}>
          {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
          <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          autoFocus={autoFocus}
          readOnly={readOnly}
          {...others}
        />
      </div>
  )
})
