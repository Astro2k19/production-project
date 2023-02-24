import React, { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib'

type InputOmittedAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends InputOmittedAttributes {
  className?: string
  onChange?: (value: string) => void
  value?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    type = 'text',
    placeholder,
    ...others
  } = props

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value)
  }

  return (
      <div className={classNames([cls.inputWrapper, className])}>
          {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
          <div className={cls.caretWrapper}>
              <input
              type={type}
              value={value}
              onChange={onChangeHandler}
              className={cls.input}
              {...others}
          />
              <span className={cls.caret}></span>
          </div>
      </div>
  )
})
